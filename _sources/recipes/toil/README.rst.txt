:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toil'
.. highlight: bash

toil
====

.. conda:recipe:: toil
   :replaces_section_title:
   :noindex:

   A scalable\, efficient\, cross\-platform and easy\-to\-use workflow engine in pure Python

   :homepage: https://github.com/BD2KGenomics/toil
   :license: Apache 2.0
   :recipe: /`toil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil/meta.yaml>`_

   


.. conda:package:: toil

   |downloads_toil| |docker_toil|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.24.0-0</code>,  <code>3.23.1-0</code>,  <code>3.21.0-0</code>,  <code>3.20.0-0</code>,  <code>3.14.0-2</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  </span></summary>
      

      ``4.1.0-0``,  ``4.0.0-0``,  ``3.24.0-0``,  ``3.23.1-0``,  ``3.21.0-0``,  ``3.20.0-0``,  ``3.14.0-2``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0a1-0``,  ``3.11.0-1``,  ``3.11.0-0``,  ``3.11.0a1-1``,  ``3.11.0a1-0``,  ``3.10.0-0``,  ``3.10.0a1-1``,  ``3.10.0a1-0``,  ``3.9.0a1-0``,  ``3.8.0a1-1``,  ``3.8.0a1-0``,  ``3.7.0a-1``,  ``3.7.0a-0``,  ``3.6.0-0``,  ``3.5.0a1-3``,  ``3.5.0a1-2``,  ``3.5.0a1-1``,  ``3.5.0a1-0``,  ``3.4.0a1-3``,  ``3.4.0a1-2``,  ``3.4.0a1-1``,  ``3.4.0a1-0``,  ``3.3.0a1-0``,  ``3.2.0a2-2``,  ``3.2.0a2-0``

      
      .. raw:: html

         </details>
      

   
   :depends addict: ``<=2.2.0``
   :depends boto: ``>=2.48.0``
   :depends boto3: ``>=1.7.50,<2.0``
   :depends cwltool: ``>=1.0.20190815141648``
   :depends dill: ``>=0.2.7.1``
   :depends docker-py: ``>=2.5.1``
   :depends future: 
   :depends galaxy-lib: ``>=18.9.2``
   :depends pathlib2: ``>=2.3.2``
   :depends psutil: ``>=3.0.1,<6``
   :depends pycryptodome: ``>=3.5.1``
   :depends pynacl: ``1.1.2.*``
   :depends python: ``>=3.6``
   :depends python-dateutil: 
   :depends requests: ``2.*``
   :depends schema-salad: ``>=4.5.20190815125611,<5``
   :depends six: ``>=1.10.0``
   :depends sphinx: ``>=1.7.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toil

   and update with::

      conda update toil

   or use the docker container::

      docker pull quay.io/biocontainers/toil:<tag>

   (see `toil/tags`_ for valid values for ``<tag>``)


.. |downloads_toil| image:: https://img.shields.io/conda/dn/bioconda/toil.svg?style=flat
   :target: https://anaconda.org/bioconda/toil
   :alt:   (downloads)
.. |docker_toil| image:: https://quay.io/repository/biocontainers/toil/status
   :target: https://quay.io/repository/biocontainers/toil
.. _`toil/tags`: https://quay.io/repository/biocontainers/toil?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toil/README.html