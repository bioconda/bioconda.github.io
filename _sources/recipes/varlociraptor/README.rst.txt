:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varlociraptor'
.. highlight: bash

varlociraptor
=============

.. conda:recipe:: varlociraptor
   :replaces_section_title:
   :noindex:

   Flexible\, uncertainty\-aware variant calling with parameter free filtration via FDR control.

   :homepage: https://varlociraptor.github.io
   :license: GPL / GPLv3
   :recipe: /`varlociraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlociraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varlociraptor/meta.yaml>`_

   


.. conda:package:: varlociraptor

   |downloads_varlociraptor| |docker_varlociraptor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.8.0-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blis: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openblas: ``>=0.3.6,<0.3.7.0a0``
   :depends openssl: ``>=1.1.1g,<1.1.2a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varlociraptor

   and update with::

      conda update varlociraptor

   or use the docker container::

      docker pull quay.io/biocontainers/varlociraptor:<tag>

   (see `varlociraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_varlociraptor| image:: https://img.shields.io/conda/dn/bioconda/varlociraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/varlociraptor
   :alt:   (downloads)
.. |docker_varlociraptor| image:: https://quay.io/repository/biocontainers/varlociraptor/status
   :target: https://quay.io/repository/biocontainers/varlociraptor
.. _`varlociraptor/tags`: https://quay.io/repository/biocontainers/varlociraptor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varlociraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varlociraptor/README.html