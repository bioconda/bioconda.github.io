:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsifter'
.. highlight: bash

samsifter
=========

.. conda:recipe:: samsifter
   :replaces_section_title:
   :noindex:

   Workflow editor for metagenomic analysis

   :homepage: http://pypi.python.org/pypi/SamSifter/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`samsifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter/meta.yaml>`_

   


.. conda:package:: samsifter

   |downloads_samsifter| |docker_samsifter|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on matplotlib: ``>=1.3.1``
   :depends on numpy: ``>=1.6.1``
   :depends on pandas: ``>=0.14.1``
   :depends on pyqt: ``>=4.11.4,<4.12.0a0``
   :depends on python: ``>=3.5,<3.6.0a0``
   :depends on python-dateutil: 
   :depends on pytz: 
   :depends on xorg-libsm: 
   :depends on xorg-libxrender: 

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

    pixi global install samsifter

to add into an existing workspace instead, run::

    pixi add samsifter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samsifter

Alternatively, to install into a new environment, run::

    conda create -n envname samsifter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samsifter:<tag>

(see `samsifter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samsifter| image:: https://img.shields.io/conda/dn/bioconda/samsifter.svg?style=flat
   :target: https://anaconda.org/bioconda/samsifter
   :alt:   (downloads)
.. |docker_samsifter| image:: https://quay.io/repository/biocontainers/samsifter/status
   :target: https://quay.io/repository/biocontainers/samsifter
.. _`samsifter/tags`: https://quay.io/repository/biocontainers/samsifter?tab=tags


.. raw:: html

    <script>
        var package = "samsifter";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsifter/README.html