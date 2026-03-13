:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'absense'
.. highlight: bash

absense
=======

.. conda:recipe:: absense
   :replaces_section_title:
   :noindex:

   abSENSE\: a method to interpret undetected homologs

   :homepage: https://github.com/caraweisman/abSENSE
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`absense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/absense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/absense/meta.yaml>`_

   


.. conda:package:: absense

   |downloads_absense| |docker_absense|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on dill: ``>=0.3.9``
   :depends on matplotlib-base: ``>=3.0.0``
   :depends on python: ``>=3.8,<3.9``
   :depends on scipy: ``1.7.3.*``

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

    pixi global install absense

to add into an existing workspace instead, run::

    pixi add absense

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install absense

Alternatively, to install into a new environment, run::

    conda create -n envname absense

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/absense:<tag>

(see `absense/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_absense| image:: https://img.shields.io/conda/dn/bioconda/absense.svg?style=flat
   :target: https://anaconda.org/bioconda/absense
   :alt:   (downloads)
.. |docker_absense| image:: https://quay.io/repository/biocontainers/absense/status
   :target: https://quay.io/repository/biocontainers/absense
.. _`absense/tags`: https://quay.io/repository/biocontainers/absense?tab=tags


.. raw:: html

    <script>
        var package = "absense";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/absense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/absense/README.html