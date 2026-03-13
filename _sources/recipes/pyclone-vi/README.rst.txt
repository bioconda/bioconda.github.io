:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyclone-vi'
.. highlight: bash

pyclone-vi
==========

.. conda:recipe:: pyclone-vi
   :replaces_section_title:
   :noindex:

   A fast method for inferring clonal population structure

   :homepage: https://github.com/Roth-Lab/pyclone-vi
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyclone-vi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-020-03919-2`

   


.. conda:package:: pyclone-vi

   |downloads_pyclone-vi| |docker_pyclone-vi|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on click: ``>=8.3``
   :depends on h5py: ``>=3.0``
   :depends on numba: ``>=0.61.2``
   :depends on numpy: ``>=2.0``
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.12``
   :depends on scipy: 
   :depends on threadpoolctl: ``>=3.6.0``

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

    pixi global install pyclone-vi

to add into an existing workspace instead, run::

    pixi add pyclone-vi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyclone-vi

Alternatively, to install into a new environment, run::

    conda create -n envname pyclone-vi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyclone-vi:<tag>

(see `pyclone-vi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyclone-vi| image:: https://img.shields.io/conda/dn/bioconda/pyclone-vi.svg?style=flat
   :target: https://anaconda.org/bioconda/pyclone-vi
   :alt:   (downloads)
.. |docker_pyclone-vi| image:: https://quay.io/repository/biocontainers/pyclone-vi/status
   :target: https://quay.io/repository/biocontainers/pyclone-vi
.. _`pyclone-vi/tags`: https://quay.io/repository/biocontainers/pyclone-vi?tab=tags


.. raw:: html

    <script>
        var package = "pyclone-vi";
        var versions = ["0.2.0","0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyclone-vi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyclone-vi/README.html