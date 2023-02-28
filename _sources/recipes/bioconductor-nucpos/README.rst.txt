:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucpos'
.. highlight: bash

bioconductor-nucpos
===================

.. conda:recipe:: bioconductor-nucpos
   :replaces_section_title:
   :noindex:

   An R package for prediction of nucleosome positions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/nuCpos.html
   :license: GPL-2
   :recipe: /`bioconductor-nucpos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucpos/meta.yaml>`_

   nuCpos\, a derivative of NuPoP\, is an R package for prediction of nucleosome positions. In nuCpos\, a duration hidden Markov model is trained with a chemical map of nucleosomes either from budding yeast\, fission yeast\, or mouse embryonic stem cells. nuCpos outputs the Viterbi \(most probable\) path of nucleosome\-linker states\, predicted nucleosome occupancy scores and histone binding affinity \(HBA\) scores as NuPoP does. nuCpos can also calculate local and whole nucleosomal HBA scores for a given 147\-bp sequence. Note\: This package was designed to demonstrate the use of chemical maps in prediction. As the parental package NuPoP now provide chemical\-map\-based prediction\, users are strongly encouraged to use it for dHMM\-based prediction.


.. conda:package:: bioconductor-nucpos

   |downloads_bioconductor-nucpos| |docker_bioconductor-nucpos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nucpos

   and update with::

      conda update bioconductor-nucpos

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucpos:<tag>

   (see `bioconductor-nucpos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucpos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucpos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nucpos
   :alt:   (downloads)
.. |docker_bioconductor-nucpos| image:: https://quay.io/repository/biocontainers/bioconductor-nucpos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucpos
.. _`bioconductor-nucpos/tags`: https://quay.io/repository/biocontainers/bioconductor-nucpos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nucpos";
        var versions = ["1.16.0","1.12.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucpos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucpos/README.html