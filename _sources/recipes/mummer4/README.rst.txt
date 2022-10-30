:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer4'
.. highlight: bash

mummer4
=======

.. conda:recipe:: mummer4
   :replaces_section_title:
   :noindex:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: https://mummer4.github.io/
   :license: The Artistic License 2.0
   :recipe: /`mummer4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4/meta.yaml>`_

   


.. conda:package:: mummer4

   |downloads_mummer4| |docker_mummer4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0rc1-4</code>,  <code>4.0.0rc1-3</code>,  <code>4.0.0rc1-2</code>,  <code>4.0.0rc1-1</code>,  <code>4.0.0rc1-0</code>,  <code>4.0.0beta2-5</code>,  <code>4.0.0beta2-4</code>,  <code>4.0.0beta2-3</code>,  <code>4.0.0beta2-2</code>,  </span></summary>
      

      ``4.0.0rc1-4``,  ``4.0.0rc1-3``,  ``4.0.0rc1-2``,  ``4.0.0rc1-1``,  ``4.0.0rc1-0``,  ``4.0.0beta2-5``,  ``4.0.0beta2-4``,  ``4.0.0beta2-3``,  ``4.0.0beta2-2``,  ``4.0.0beta2-1``,  ``4.0.0beta2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mummer4

   and update with::

      conda update mummer4

   or use the docker container::

      docker pull quay.io/biocontainers/mummer4:<tag>

   (see `mummer4/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer4| image:: https://img.shields.io/conda/dn/bioconda/mummer4.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer4
   :alt:   (downloads)
.. |docker_mummer4| image:: https://quay.io/repository/biocontainers/mummer4/status
   :target: https://quay.io/repository/biocontainers/mummer4
.. _`mummer4/tags`: https://quay.io/repository/biocontainers/mummer4?tab=tags


.. raw:: html

    <script>
        var package = "mummer4";
        var versions = ["4.0.0rc1","4.0.0rc1","4.0.0rc1","4.0.0rc1","4.0.0rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer4/README.html