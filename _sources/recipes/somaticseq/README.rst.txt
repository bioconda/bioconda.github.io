:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somaticseq'
.. highlight: bash

somaticseq
==========

.. conda:recipe:: somaticseq
   :replaces_section_title:
   :noindex:

   An ensemble approach to accurately detect somatic mutations

   :homepage: http://bioinform.github.io/somaticseq/
   :license: BSD / BSD-2-Clause
   :recipe: /`somaticseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somaticseq/meta.yaml>`_

   SomaticSeq is an ensemble caller that has the ability to use machine learning to filter out false positives. The detailed documentation is included in the package\, located in docs\/Manual.pdf. A quick guide can also be found here. SomaticSeq\'s open\-access paper\: Fang LT\, Afshar PT\, Chhibber A\, et al. An ensemble approach to accurately detect somatic mutations using SomaticSeq. Genome Biol. 2015\;16\:197.


.. conda:package:: somaticseq

   |downloads_somaticseq| |docker_somaticseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.3-0</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.2-0</code>,  <code>3.6.0-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.4.2-0</code>,  </span></summary>
      

      ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.2-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``2.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends gatk4: 
   :depends lofreq: 
   :depends muse: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends r-ada: 
   :depends r-base: 
   :depends scalpel: 
   :depends scipy: 
   :depends vardict: 
   :depends varscan: ``>=2``
   :depends xgboost: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install somaticseq

   and update with::

      mamba update somaticseq

  To create a new environment, run::

      mamba create --name myenvname somaticseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/somaticseq:<tag>

   (see `somaticseq/tags`_ for valid values for ``<tag>``)


.. |downloads_somaticseq| image:: https://img.shields.io/conda/dn/bioconda/somaticseq.svg?style=flat
   :target: https://anaconda.org/bioconda/somaticseq
   :alt:   (downloads)
.. |docker_somaticseq| image:: https://quay.io/repository/biocontainers/somaticseq/status
   :target: https://quay.io/repository/biocontainers/somaticseq
.. _`somaticseq/tags`: https://quay.io/repository/biocontainers/somaticseq?tab=tags


.. raw:: html

    <script>
        var package = "somaticseq";
        var versions = ["3.7.3","3.7.2","3.7.1","3.7.0","3.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somaticseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somaticseq/README.html