:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnastructure'
.. highlight: bash

rnastructure
============

.. conda:recipe:: rnastructure
   :replaces_section_title:
   :noindex:

   RNAstructure is a complete package for RNA and DNA secondary structure  prediction and analysis. It includes algorithms for   secondary structure  prediction\, including facility to predict base pairing probabilities. It  also can be used to predict bimolecular structures and can predict the  equilibrium binding affinity of an oligonucleotide to a structured RNA  target. This is useful for siRNA design. It can also predict secondary  structures common to two\, unaligned sequences\, which is much more accurate  than single sequence secondary structure prediction. Finally\, RNAstructure  can take a number of different types of experiment mapping data to constrain  or restrain structure prediction. These include chemical mapping\, enzymatic  mapping\, NMR\, and SHAPE data.

   :homepage: http://rna.urmc.rochester.edu/RNAstructure.html
   :license: GPL / GPLv2
   :recipe: /`rnastructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnastructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnastructure/meta.yaml>`_
   :links: biotools: :biotools:`rnastructure`

   


.. conda:package:: rnastructure

   |downloads_rnastructure| |docker_rnastructure|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.3-3</code>,  <code>6.3-2</code>,  <code>6.3-1</code>,  <code>6.3-0</code>,  <code>6.1-2</code>,  <code>6.1-1</code>,  <code>6.1-0</code>,  <code>6.0-1</code>,  <code>6.0-0</code>,  </span></summary>
      

      ``6.3-3``,  ``6.3-2``,  ``6.3-1``,  ``6.3-0``,  ``6.1-2``,  ``6.1-1``,  ``6.1-0``,  ``6.0-1``,  ``6.0-0``,  ``5.7-2``,  ``5.7-1``,  ``5.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnastructure

   and update with::

      conda update rnastructure

   or use the docker container::

      docker pull quay.io/biocontainers/rnastructure:<tag>

   (see `rnastructure/tags`_ for valid values for ``<tag>``)


.. |downloads_rnastructure| image:: https://img.shields.io/conda/dn/bioconda/rnastructure.svg?style=flat
   :target: https://anaconda.org/bioconda/rnastructure
   :alt:   (downloads)
.. |docker_rnastructure| image:: https://quay.io/repository/biocontainers/rnastructure/status
   :target: https://quay.io/repository/biocontainers/rnastructure
.. _`rnastructure/tags`: https://quay.io/repository/biocontainers/rnastructure?tab=tags


.. raw:: html

    <script>
        var package = "rnastructure";
        var versions = ["6.3","6.3","6.3","6.3","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnastructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnastructure/README.html