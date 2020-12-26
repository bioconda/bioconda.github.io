:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homopolish'
.. highlight: bash

homopolish
==========

.. conda:recipe:: homopolish
   :replaces_section_title:
   :noindex:

   Homopolish is a polish tools

   :homepage: https://github.com/ythuang0522/homopolish
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`homopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homopolish/meta.yaml>`_

   


.. conda:package:: homopolish

   |downloads_homopolish| |docker_homopolish|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biopython: ``1.76.*``
   :depends feather-format: ``0.4.1.*``
   :depends joblib: ``0.15.1.*``
   :depends mash: ``2.1.1.*``
   :depends minimap2: ``2.17.*``
   :depends more-itertools: ``8.4.0.*``
   :depends numpy: ``1.18.5.*``
   :depends pandas: ``0.23.4.*``
   :depends python: 
   :depends python-wget: ``3.2.*``
   :depends requests: ``2.24.0.*``
   :depends scikit-learn: ``0.21.3.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install homopolish

   and update with::

      conda update homopolish

   or use the docker container::

      docker pull quay.io/biocontainers/homopolish:<tag>

   (see `homopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_homopolish| image:: https://img.shields.io/conda/dn/bioconda/homopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/homopolish
   :alt:   (downloads)
.. |docker_homopolish| image:: https://quay.io/repository/biocontainers/homopolish/status
   :target: https://quay.io/repository/biocontainers/homopolish
.. _`homopolish/tags`: https://quay.io/repository/biocontainers/homopolish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homopolish/README.html