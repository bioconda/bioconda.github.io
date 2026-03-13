:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anospp-analysis'
.. highlight: bash

anospp-analysis
===============

.. conda:recipe:: anospp-analysis
   :replaces_section_title:
   :noindex:

   ANOSPP data analysis.

   :homepage: https://pypi.org/project/anospp-analysis
   :license: MIT / MIT
   :recipe: /`anospp-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anospp-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anospp-analysis/meta.yaml>`_

   


.. conda:package:: anospp-analysis

   |downloads_anospp-analysis| |docker_anospp-analysis|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.3-0``

      

   
   :depends on blast: ``2.16``
   :depends on bokeh: 
   :depends on cutadapt: 
   :depends on fasttree: 
   :depends on keras: ``2.15.0``
   :depends on mafft: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on python: ``>=3.10,<3.11``
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on tensorflow-base: ``2.15.0``

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

    pixi global install anospp-analysis

to add into an existing workspace instead, run::

    pixi add anospp-analysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anospp-analysis

Alternatively, to install into a new environment, run::

    conda create -n envname anospp-analysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anospp-analysis:<tag>

(see `anospp-analysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_anospp-analysis| image:: https://img.shields.io/conda/dn/bioconda/anospp-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/anospp-analysis
   :alt:   (downloads)
.. |docker_anospp-analysis| image:: https://quay.io/repository/biocontainers/anospp-analysis/status
   :target: https://quay.io/repository/biocontainers/anospp-analysis
.. _`anospp-analysis/tags`: https://quay.io/repository/biocontainers/anospp-analysis?tab=tags


.. raw:: html

    <script>
        var package = "anospp-analysis";
        var versions = ["0.4.0","0.4.0","0.3.0","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anospp-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anospp-analysis/README.html