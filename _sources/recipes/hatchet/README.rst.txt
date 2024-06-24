:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hatchet'
.. highlight: bash

hatchet
=======

.. conda:recipe:: hatchet
   :replaces_section_title:
   :noindex:

   A package to infer allele and clone\-specific copy\-number aberrations \(CNAs\).

   :homepage: https://github.com/raphael-group/hatchet
   :documentation: https://raphael-group.github.io/hatchet/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`hatchet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet/meta.yaml>`_

   HATCHet is an algorithm to infer allele and clone\-specific copy\-number
   aberrations \(CNAs\)\, clone proportions\, and whole\-genome duplications
   \(WGD\) for several tumor clones jointly from multiple bulk\-tumor samples
   of the same patient or from a single bulk\-tumor sample.


.. conda:package:: hatchet

   |downloads_hatchet| |docker_hatchet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.4.14-0``,  ``0.4.12-1``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-3``,  ``0.2.9-1``,  ``0.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.9``
   :depends biopython: 
   :depends hmmlearn: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends mosdepth: 
   :depends pandas: 
   :depends picard-slim: 
   :depends psutil: 
   :depends pyomo: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends samtools: ``>=1.9``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hatchet

   and update with::

      mamba update hatchet

  To create a new environment, run::

      mamba create --name myenvname hatchet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hatchet:<tag>

   (see `hatchet/tags`_ for valid values for ``<tag>``)


.. |downloads_hatchet| image:: https://img.shields.io/conda/dn/bioconda/hatchet.svg?style=flat
   :target: https://anaconda.org/bioconda/hatchet
   :alt:   (downloads)
.. |docker_hatchet| image:: https://quay.io/repository/biocontainers/hatchet/status
   :target: https://quay.io/repository/biocontainers/hatchet
.. _`hatchet/tags`: https://quay.io/repository/biocontainers/hatchet?tab=tags


.. raw:: html

    <script>
        var package = "hatchet";
        var versions = ["2.0.1","2.0.1","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hatchet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hatchet/README.html