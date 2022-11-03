:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synapsis'
.. highlight: bash

bioconductor-synapsis
=====================

.. conda:recipe:: bioconductor-synapsis
   :replaces_section_title:
   :noindex:

   An R package to automate the analysis of double\-strand break repair during meiosis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/synapsis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-synapsis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapsis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapsis/meta.yaml>`_

   Synapsis is a Bioconductor software package for automated \(unbiased and reproducible\) analysis of meiotic immunofluorescence datasets. The primary functions of the software can i\) identify cells in meiotic prophase that are labelled by a synaptonemal complex axis or central element protein\, ii\) isolate individual synaptonemal complexes and measure their physical length\, iii\) quantify foci and co\-localise them with synaptonemal complexes\, iv\) measure interference between synaptonemal complex\-associated foci. The software has applications that extend to multiple species and to the analysis of other proteins that label meiotic prophase chromosomes. The software converts meiotic immunofluorescence images into R data frames that are compatible with machine learning methods. Given a set of microscopy images of meiotic spread slides\, synapsis crops images around individual single cells\, counts colocalising foci on strands on a per cell basis\, and measures the distance between foci on any given strand.


.. conda:package:: bioconductor-synapsis

   |downloads_bioconductor-synapsis| |docker_bioconductor-synapsis|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.40.0,<4.41.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synapsis

   and update with::

      conda update bioconductor-synapsis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synapsis:<tag>

   (see `bioconductor-synapsis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synapsis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapsis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synapsis
   :alt:   (downloads)
.. |docker_bioconductor-synapsis| image:: https://quay.io/repository/biocontainers/bioconductor-synapsis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapsis
.. _`bioconductor-synapsis/tags`: https://quay.io/repository/biocontainers/bioconductor-synapsis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synapsis";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapsis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapsis/README.html