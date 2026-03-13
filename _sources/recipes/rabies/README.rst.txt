:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rabies'
.. highlight: bash

rabies
======

.. conda:recipe:: rabies
   :replaces_section_title:
   :noindex:

   RABIES\: Rodent Automated Bold Improvement of EPI Sequences.

   :homepage: https://github.com/CoBrALab/RABIES
   :license: GPL / GPL-2.0-or-later
   :recipe: /`rabies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabies/meta.yaml>`_

   


.. conda:package:: rabies

   |downloads_rabies| |docker_rabies|

   :versions:
      
      

      ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.1-0``

      

   
   :depends on etelemetry: ``>=0.2.0``
   :depends on matplotlib-base: ``3.3.4``
   :depends on networkx: ``<3``
   :depends on nibabel: ``3.2.1``
   :depends on nilearn: ``0.7.1``
   :depends on nipype: ``1.6.1``
   :depends on numpy: ``1.20.1``
   :depends on pandas: ``1.2.4``
   :depends on pathos: ``0.2.7``
   :depends on pybids: ``0.16.3``
   :depends on python: ``>=3.9``
   :depends on qbatch: ``2.3``
   :depends on scikit-learn: ``0.24.1``
   :depends on scipy: ``1.8.1``
   :depends on seaborn-base: ``0.11.1``
   :depends on simpleitk: ``2.0.2``
   :depends on traits: ``<7.0``

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

    pixi global install rabies

to add into an existing workspace instead, run::

    pixi add rabies

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rabies

Alternatively, to install into a new environment, run::

    conda create -n envname rabies

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rabies:<tag>

(see `rabies/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rabies| image:: https://img.shields.io/conda/dn/bioconda/rabies.svg?style=flat
   :target: https://anaconda.org/bioconda/rabies
   :alt:   (downloads)
.. |docker_rabies| image:: https://quay.io/repository/biocontainers/rabies/status
   :target: https://quay.io/repository/biocontainers/rabies
.. _`rabies/tags`: https://quay.io/repository/biocontainers/rabies?tab=tags


.. raw:: html

    <script>
        var package = "rabies";
        var versions = ["0.5.5","0.5.4","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabies/README.html