:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kfoots'
.. highlight: bash

kfoots
======

.. conda:recipe:: kfoots
   :replaces_section_title:
   :noindex:

   The package provides methods for fitting multivariate count data with a mixture model or a hidden markov model. Each mixture component is a negative multivariate random variable and an EM algorithm is used to maximize the likelihood.

   :homepage: http://github.com/lamortenera/kfoots
   :license: GPL-2
   :recipe: /`kfoots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kfoots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kfoots/meta.yaml>`_

   


.. conda:package:: kfoots

   |downloads_kfoots| |docker_kfoots|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcpp: ``>=0.10.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kfoots

   and update with::

      conda update kfoots

   or use the docker container::

      docker pull quay.io/biocontainers/kfoots:<tag>

   (see `kfoots/tags`_ for valid values for ``<tag>``)


.. |downloads_kfoots| image:: https://img.shields.io/conda/dn/bioconda/kfoots.svg?style=flat
   :target: https://anaconda.org/bioconda/kfoots
   :alt:   (downloads)
.. |docker_kfoots| image:: https://quay.io/repository/biocontainers/kfoots/status
   :target: https://quay.io/repository/biocontainers/kfoots
.. _`kfoots/tags`: https://quay.io/repository/biocontainers/kfoots?tab=tags


.. raw:: html

    <script>
        var package = "kfoots";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kfoots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kfoots/README.html