:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmip'
.. highlight: bash

cmip
====

.. conda:recipe:: cmip
   :replaces_section_title:
   :noindex:

   CMIP Classical Molecular Interaction Potentials

   :homepage: http://mmb.irbbarcelona.org/gitlab/gelpi/CMIP
   :license: APACHE / Apache Software License
   :recipe: /`cmip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmip/meta.yaml>`_

   The latest version of the classical molecular interaction potential \(CMIP\) has the ability to predict the position of crystallographic waters in several proteins with great accuracy.


.. conda:package:: cmip

   |downloads_cmip| |docker_cmip|

   :versions:
      
      

      ``2.6.5-0``,  ``2.6.2-1``,  ``2.6.2-0``,  ``2.6.1-5``,  ``2.6.1-4``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmip

   and update with::

      conda update cmip

   or use the docker container::

      docker pull quay.io/biocontainers/cmip:<tag>

   (see `cmip/tags`_ for valid values for ``<tag>``)


.. |downloads_cmip| image:: https://img.shields.io/conda/dn/bioconda/cmip.svg?style=flat
   :target: https://anaconda.org/bioconda/cmip
   :alt:   (downloads)
.. |docker_cmip| image:: https://quay.io/repository/biocontainers/cmip/status
   :target: https://quay.io/repository/biocontainers/cmip
.. _`cmip/tags`: https://quay.io/repository/biocontainers/cmip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmip/README.html