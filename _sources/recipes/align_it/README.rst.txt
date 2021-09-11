:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'align_it'
.. highlight: bash

align_it
========

.. conda:recipe:: align_it
   :replaces_section_title:
   :noindex:

   Align\-it is a tool to align molecules according to their pharmacophores. A pharmacophore is an abstract concept based on the specific interactions observed in drug\-receptor interactions\: hydrogen bonding\, charge transfer\, electrostatic and hydrophobic interactions.

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/align-it/1.0.4/align-it.html
   :license: LGPL
   :recipe: /`align_it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_it>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/align_it/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_alignit`

   


.. conda:package:: align_it

   |downloads_align_it| |docker_align_it|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-0</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  <code>1.0.3-5</code>,  <code>1.0.3-4</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  </span></summary>
      

      ``1.0.4-0``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends openbabel: ``<=2.4.1``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install align_it

   and update with::

      conda update align_it

   or use the docker container::

      docker pull quay.io/biocontainers/align_it:<tag>

   (see `align_it/tags`_ for valid values for ``<tag>``)


.. |downloads_align_it| image:: https://img.shields.io/conda/dn/bioconda/align_it.svg?style=flat
   :target: https://anaconda.org/bioconda/align_it
   :alt:   (downloads)
.. |docker_align_it| image:: https://quay.io/repository/biocontainers/align_it/status
   :target: https://quay.io/repository/biocontainers/align_it
.. _`align_it/tags`: https://quay.io/repository/biocontainers/align_it?tab=tags


.. raw:: html

    <script>
        var package = "align_it";
        var versions = ["1.0.4","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/align_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/align_it/README.html