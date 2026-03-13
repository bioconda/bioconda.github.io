:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tajimas_d'
.. highlight: bash

tajimas_d
=========

.. conda:recipe:: tajimas_d
   :replaces_section_title:
   :noindex:

   Computes Tajimas D\, the Pi\- or Watterson\-Estimator for multiple sequences.

   :homepage: https://github.com/not-a-feature/tajimas_d
   :documentation: https://github.com/not-a-feature/tajimas_d/blob/v2.0.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tajimas_d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tajimas_d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tajimas_d/meta.yaml>`_

   Tajima\'s D is a population genetic test statistic that computes the difference between the mean number of pairwise differences and the number of segregating sites. It is used to determine whether a population is expanding or shrinking.



.. conda:package:: tajimas_d

   |downloads_tajimas_d| |docker_tajimas_d|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends on minifasta: ``>=2.2``
   :depends on python: ``>=3.8``

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

    pixi global install tajimas_d

to add into an existing workspace instead, run::

    pixi add tajimas_d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tajimas_d

Alternatively, to install into a new environment, run::

    conda create -n envname tajimas_d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tajimas_d:<tag>

(see `tajimas_d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tajimas_d| image:: https://img.shields.io/conda/dn/bioconda/tajimas_d.svg?style=flat
   :target: https://anaconda.org/bioconda/tajimas_d
   :alt:   (downloads)
.. |docker_tajimas_d| image:: https://quay.io/repository/biocontainers/tajimas_d/status
   :target: https://quay.io/repository/biocontainers/tajimas_d
.. _`tajimas_d/tags`: https://quay.io/repository/biocontainers/tajimas_d?tab=tags


.. raw:: html

    <script>
        var package = "tajimas_d";
        var versions = ["2.0.4","2.0.2","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tajimas_d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tajimas_d/README.html