:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytest-marks'
.. highlight: bash

pytest-marks
============

.. conda:recipe:: pytest-marks
   :replaces_section_title:
   :noindex:

   set marks on py.test test methods

   :homepage: https://github.com/adamgoucher/pytest-marks
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`pytest-marks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks/meta.yaml>`_

   


.. conda:package:: pytest-marks

   |downloads_pytest-marks| |docker_pytest-marks|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends on pytest: ``>2.0.2``
   :depends on python: ``2.7*``
   :depends on setuptools: 

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

    pixi global install pytest-marks

to add into an existing workspace instead, run::

    pixi add pytest-marks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytest-marks

Alternatively, to install into a new environment, run::

    conda create -n envname pytest-marks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytest-marks:<tag>

(see `pytest-marks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytest-marks| image:: https://img.shields.io/conda/dn/bioconda/pytest-marks.svg?style=flat
   :target: https://anaconda.org/bioconda/pytest-marks
   :alt:   (downloads)
.. |docker_pytest-marks| image:: https://quay.io/repository/biocontainers/pytest-marks/status
   :target: https://quay.io/repository/biocontainers/pytest-marks
.. _`pytest-marks/tags`: https://quay.io/repository/biocontainers/pytest-marks?tab=tags


.. raw:: html

    <script>
        var package = "pytest-marks";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-marks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-marks/README.html