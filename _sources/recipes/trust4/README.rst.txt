:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trust4'
.. highlight: bash

trust4
======

.. conda:recipe:: trust4
   :replaces_section_title:
   :noindex:

   TCR and BCR assembly from bulk or single\-cell RNA\-seq data

   :homepage: https://github.com/liulab-dfci/TRUST4
   :license: GPL-3.0-only
   :recipe: /`trust4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trust4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trust4/meta.yaml>`_

   


.. conda:package:: trust4

   |downloads_trust4| |docker_trust4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5.1-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5.1-0``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trust4

   and update with::

      conda update trust4

   or use the docker container::

      docker pull quay.io/biocontainers/trust4:<tag>

   (see `trust4/tags`_ for valid values for ``<tag>``)


.. |downloads_trust4| image:: https://img.shields.io/conda/dn/bioconda/trust4.svg?style=flat
   :target: https://anaconda.org/bioconda/trust4
   :alt:   (downloads)
.. |docker_trust4| image:: https://quay.io/repository/biocontainers/trust4/status
   :target: https://quay.io/repository/biocontainers/trust4
.. _`trust4/tags`: https://quay.io/repository/biocontainers/trust4?tab=tags


.. raw:: html

    <script>
        var package = "trust4";
        var versions = ["1.0.9","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trust4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trust4/README.html