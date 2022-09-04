:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinf'
.. highlight: bash

dinf
====

.. conda:recipe:: dinf
   :replaces_section_title:
   :noindex:

   discriminator\-based inference for population genetics

   :homepage: https://github.com/RacimoLab/dinf
   :license: MIT
   :recipe: /`dinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinf/meta.yaml>`_

   


.. conda:package:: dinf

   |downloads_dinf| |docker_dinf|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends adjusttext: 
   :depends cyvcf2: ``>=0.30.14``
   :depends demes: ``>=0.2.1``
   :depends demesdraw: 
   :depends emcee: 
   :depends flax: ``>=0.5.2``
   :depends jax: 
   :depends matplotlib-base: 
   :depends msprime: ``>=1.0.4``
   :depends multiprocess: 
   :depends numpy: 
   :depends optax: 
   :depends python: ``>=3.8``
   :depends rich: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dinf

   and update with::

      conda update dinf

   or use the docker container::

      docker pull quay.io/biocontainers/dinf:<tag>

   (see `dinf/tags`_ for valid values for ``<tag>``)


.. |downloads_dinf| image:: https://img.shields.io/conda/dn/bioconda/dinf.svg?style=flat
   :target: https://anaconda.org/bioconda/dinf
   :alt:   (downloads)
.. |docker_dinf| image:: https://quay.io/repository/biocontainers/dinf/status
   :target: https://quay.io/repository/biocontainers/dinf
.. _`dinf/tags`: https://quay.io/repository/biocontainers/dinf?tab=tags


.. raw:: html

    <script>
        var package = "dinf";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinf/README.html