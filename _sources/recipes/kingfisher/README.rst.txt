:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kingfisher'
.. highlight: bash

kingfisher
==========

.. conda:recipe:: kingfisher
   :replaces_section_title:
   :noindex:

   Download\/extract biological FASTA\/Q read data and metadata

   :homepage: https://github.com/wwood/kingfisher-download
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kingfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher/meta.yaml>`_

   


.. conda:package:: kingfisher

   |downloads_kingfisher| |docker_kingfisher|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.2-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on aria2: ``>=1.36.0``
   :depends on awscli: 
   :depends on bird_tool_utils_python: ``>=0.4.1``
   :depends on curl: 
   :depends on extern: 
   :depends on pandas: 
   :depends on pigz: 
   :depends on pyarrow: 
   :depends on python: 
   :depends on requests: 
   :depends on sra-tools: ``>=3.0.5``
   :depends on sracat: 
   :depends on tqdm: 

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

    pixi global install kingfisher

to add into an existing workspace instead, run::

    pixi add kingfisher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kingfisher

Alternatively, to install into a new environment, run::

    conda create -n envname kingfisher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kingfisher:<tag>

(see `kingfisher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kingfisher| image:: https://img.shields.io/conda/dn/bioconda/kingfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/kingfisher
   :alt:   (downloads)
.. |docker_kingfisher| image:: https://quay.io/repository/biocontainers/kingfisher/status
   :target: https://quay.io/repository/biocontainers/kingfisher
.. _`kingfisher/tags`: https://quay.io/repository/biocontainers/kingfisher?tab=tags


.. raw:: html

    <script>
        var package = "kingfisher";
        var versions = ["0.4.1","0.3.1","0.3.0","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kingfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kingfisher/README.html