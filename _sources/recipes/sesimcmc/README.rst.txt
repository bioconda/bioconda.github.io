:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sesimcmc'
.. highlight: bash

sesimcmc
========

.. conda:recipe:: sesimcmc
   :replaces_section_title:
   :noindex:

   Motif finding with modified MCMC

   :homepage: http://favorov.bioinfolab.net/SeSiMCMC/
   :license: MIT
   :recipe: /`sesimcmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sesimcmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sesimcmc/meta.yaml>`_

   


.. conda:package:: sesimcmc

   |downloads_sesimcmc| |docker_sesimcmc|

   :versions:
      
      

      ``4.36-4``,  ``4.36-3``,  ``4.36-2``,  ``4.36-1``,  ``4.36-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sesimcmc

   and update with::

      conda update sesimcmc

   or use the docker container::

      docker pull quay.io/biocontainers/sesimcmc:<tag>

   (see `sesimcmc/tags`_ for valid values for ``<tag>``)


.. |downloads_sesimcmc| image:: https://img.shields.io/conda/dn/bioconda/sesimcmc.svg?style=flat
   :target: https://anaconda.org/bioconda/sesimcmc
   :alt:   (downloads)
.. |docker_sesimcmc| image:: https://quay.io/repository/biocontainers/sesimcmc/status
   :target: https://quay.io/repository/biocontainers/sesimcmc
.. _`sesimcmc/tags`: https://quay.io/repository/biocontainers/sesimcmc?tab=tags


.. raw:: html

    <script>
        var package = "sesimcmc";
        var versions = ["4.36","4.36","4.36","4.36","4.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sesimcmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sesimcmc/README.html