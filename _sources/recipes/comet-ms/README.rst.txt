:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comet-ms'
.. highlight: bash

comet-ms
========

.. conda:recipe:: comet-ms
   :replaces_section_title:
   :noindex:

   Comet is a command line tool that does MS\/MS database search.

   :homepage: http://comet-ms.sourceforge.net/
   :license: Apache License 2.0
   :recipe: /`comet-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comet-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comet-ms/meta.yaml>`_
   :links: doi: :doi:`10.1007/s13361-015-1179-x`, doi: :doi:`10.1002/pmic.201200439`

   


.. conda:package:: comet-ms

   |downloads_comet-ms| |docker_comet-ms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019015-0</code>,  <code>2019014-0</code>,  <code>2019013-0</code>,  <code>2019012-0</code>,  <code>2019011-0</code>,  <code>2019010-0</code>,  <code>2018014-0</code>,  <code>2018013-0</code>,  <code>2018012-1</code>,  </span></summary>
      

      ``2019015-0``,  ``2019014-0``,  ``2019013-0``,  ``2019012-0``,  ``2019011-0``,  ``2019010-0``,  ``2018014-0``,  ``2018013-0``,  ``2018012-1``,  ``2018012-0``,  ``2016013-3``,  ``2016013-2``,  ``2016013-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install comet-ms

   and update with::

      conda update comet-ms

   or use the docker container::

      docker pull quay.io/biocontainers/comet-ms:<tag>

   (see `comet-ms/tags`_ for valid values for ``<tag>``)


.. |downloads_comet-ms| image:: https://img.shields.io/conda/dn/bioconda/comet-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/comet-ms
   :alt:   (downloads)
.. |docker_comet-ms| image:: https://quay.io/repository/biocontainers/comet-ms/status
   :target: https://quay.io/repository/biocontainers/comet-ms
.. _`comet-ms/tags`: https://quay.io/repository/biocontainers/comet-ms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comet-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comet-ms/README.html