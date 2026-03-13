:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ymp'
.. highlight: bash

ymp
===

.. conda:recipe:: ymp
   :replaces_section_title:
   :noindex:

   Create entire NGS pipelines with one command

   :homepage: https://ymp.readthedocs.io
   :developer docs: https://github.com/epruesse/ymp
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`ymp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ymp/meta.yaml>`_

   YMP allows composing complex NGS data analysis workflows from
   conceptual building blocks \(\"stages\"\) using a single command line
   statement. Pre\-tested conda environments are installed on\-the fly\,
   reference databases downloaded as needed and requested workflows
   executed using Snakemake.

   With YMP\, developing new pipelines or testing alternative
   approaches using differnt tools or optimizing parameters becomes
   easy. Results from previous results are reused where possible. The
   collection of stages included with YMP is can be extended with
   project specific YMP stage definitions or simple Snakefiles.



.. conda:package:: ymp

   |downloads_ymp| |docker_ymp|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.1.0-0``

      

   
   :depends on aiohttp: 
   :depends on click: ``>8``
   :depends on click-completion: 
   :depends on coloredlogs: 
   :depends on conda: 
   :depends on drmaa: 
   :depends on mamba: 
   :depends on networkx: ``>=2``
   :depends on openpyxl: 
   :depends on pandas: ``>=0.20``
   :depends on python: ``>=3.10``
   :depends on ruamel.yaml: ``>0.15``
   :depends on snakemake: ``>=7.32.1,<8.0a0``
   :depends on tqdm: ``>=4.21.0``
   :depends on xdg: 
   :depends on xlrd: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install ymp

to add into an existing workspace instead, run::

    pixi add ymp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ymp

Alternatively, to install into a new environment, run::

    conda create -n envname ymp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ymp:<tag>

(see `ymp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ymp| image:: https://img.shields.io/conda/dn/bioconda/ymp.svg?style=flat
   :target: https://anaconda.org/bioconda/ymp
   :alt:   (downloads)
.. |docker_ymp| image:: https://quay.io/repository/biocontainers/ymp/status
   :target: https://quay.io/repository/biocontainers/ymp
.. _`ymp/tags`: https://quay.io/repository/biocontainers/ymp?tab=tags


.. raw:: html

    <script>
        var package = "ymp";
        var versions = ["0.3.2","0.3.1","0.2.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ymp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ymp/README.html