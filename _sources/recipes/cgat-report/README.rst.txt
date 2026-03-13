:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-report'
.. highlight: bash

cgat-report
===========

.. conda:recipe:: cgat-report
   :replaces_section_title:
   :noindex:

   A report generator in python based on sphinx

   :homepage: https://github.com/AndreasHeger/CGATReport
   :license: BSD
   :recipe: /`cgat-report <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-report/meta.yaml>`_

   


.. conda:package:: cgat-report

   |downloads_cgat-report| |docker_cgat-report|

   :versions:
      
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.6.1-1``,  ``0.3.7-1``,  ``0.3.7-0``

      

   
   :depends on bokeh: 
   :depends on docutils: 
   :depends on future: 
   :depends on matplotlib-base: ``>=2.0``
   :depends on matplotlib-venn: 
   :depends on nose: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on python: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on six: 
   :depends on sphinx: 
   :depends on sqlalchemy: 

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

    pixi global install cgat-report

to add into an existing workspace instead, run::

    pixi add cgat-report

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgat-report

Alternatively, to install into a new environment, run::

    conda create -n envname cgat-report

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgat-report:<tag>

(see `cgat-report/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgat-report| image:: https://img.shields.io/conda/dn/bioconda/cgat-report.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-report
   :alt:   (downloads)
.. |docker_cgat-report| image:: https://quay.io/repository/biocontainers/cgat-report/status
   :target: https://quay.io/repository/biocontainers/cgat-report
.. _`cgat-report/tags`: https://quay.io/repository/biocontainers/cgat-report?tab=tags


.. raw:: html

    <script>
        var package = "cgat-report";
        var versions = ["0.9.1","0.9.0","0.8.4","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-report/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-report/README.html