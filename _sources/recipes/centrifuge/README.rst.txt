:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrifuge'
.. highlight: bash

centrifuge
==========

.. conda:recipe:: centrifuge
   :replaces_section_title:
   :noindex:

   Classifier for metagenomic sequences.

   :homepage: https://github.com/DaehwanKimLab/centrifuge
   :license: GPL3
   :recipe: /`centrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge/meta.yaml>`_
   :links: biotools: :biotools:`Centrifuge`, doi: :doi:`10.1101/gr.210641.116`

   


.. conda:package:: centrifuge

   |downloads_centrifuge| |docker_centrifuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-0</code>,  <code>1.0.4_beta-6</code>,  <code>1.0.4_beta-5</code>,  <code>1.0.4_beta-4</code>,  <code>1.0.4_beta-3</code>,  <code>1.0.4_beta-2</code>,  <code>1.0.4_beta-0</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  </span></summary>
      

      ``1.0.4-0``,  ``1.0.4_beta-6``,  ``1.0.4_beta-5``,  ``1.0.4_beta-4``,  ``1.0.4_beta-3``,  ``1.0.4_beta-2``,  ``1.0.4_beta-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends perl: 
   :depends python: ``<3``
   :depends tar: 
   :depends wget: 
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install centrifuge

   and update with::

      conda update centrifuge

   or use the docker container::

      docker pull quay.io/biocontainers/centrifuge:<tag>

   (see `centrifuge/tags`_ for valid values for ``<tag>``)


.. |downloads_centrifuge| image:: https://img.shields.io/conda/dn/bioconda/centrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/centrifuge
   :alt:   (downloads)
.. |docker_centrifuge| image:: https://quay.io/repository/biocontainers/centrifuge/status
   :target: https://quay.io/repository/biocontainers/centrifuge
.. _`centrifuge/tags`: https://quay.io/repository/biocontainers/centrifuge?tab=tags


.. raw:: html

    <script>
        var package = "centrifuge";
        var versions = ["1.0.4","1.0.4_beta","1.0.4_beta","1.0.4_beta","1.0.4_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuge/README.html