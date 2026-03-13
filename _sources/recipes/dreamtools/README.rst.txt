:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dreamtools'
.. highlight: bash

dreamtools
==========

.. conda:recipe:: dreamtools
   :replaces_section_title:
   :noindex:

   Scoring functions for the DREAM \/ SAGE challenges

   :homepage: https://github.com/dreamtools/dreamtools
   :license: BSD License
   :recipe: /`dreamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools/meta.yaml>`_

   


.. conda:package:: dreamtools

   |downloads_dreamtools| |docker_dreamtools|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.5-0``

      

   
   :depends on biokit: 
   :depends on bioservices: ``>=1.4.5``
   :depends on colormap: 
   :depends on cython: 
   :depends on easydev: ``>=0.9.14``
   :depends on fitter: 
   :depends on numexpr: 
   :depends on pandas: 
   :depends on python: ``2.7*``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on synapseclient: 
   :depends on tabulate: 
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

    pixi global install dreamtools

to add into an existing workspace instead, run::

    pixi add dreamtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dreamtools

Alternatively, to install into a new environment, run::

    conda create -n envname dreamtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dreamtools:<tag>

(see `dreamtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dreamtools| image:: https://img.shields.io/conda/dn/bioconda/dreamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/dreamtools
   :alt:   (downloads)
.. |docker_dreamtools| image:: https://quay.io/repository/biocontainers/dreamtools/status
   :target: https://quay.io/repository/biocontainers/dreamtools
.. _`dreamtools/tags`: https://quay.io/repository/biocontainers/dreamtools?tab=tags


.. raw:: html

    <script>
        var package = "dreamtools";
        var versions = ["1.3.0","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dreamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dreamtools/README.html