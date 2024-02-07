:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-gripss'
.. highlight: bash

hmftools-gripss
===============

.. conda:recipe:: hmftools-gripss
   :replaces_section_title:
   :noindex:

   GRIPSS applies a set of filtering and post processing steps on GRIDSS paired tumor\-normal output to produce a high confidence set of somatic SV for a tumor sample.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/gripss
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-gripss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gripss/meta.yaml>`_

   


.. conda:package:: hmftools-gripss

   |downloads_hmftools-gripss| |docker_hmftools-gripss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-0</code>,  <code>2.3.5-0</code>,  <code>2.3.2-0</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  <code>2.0-0</code>,  <code>1.11-0</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  </span></summary>
      

      ``2.4-0``,  ``2.3.5-0``,  ``2.3.2-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.11-0``,  ``1.9-1``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
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

      mamba install hmftools-gripss

   and update with::

      mamba update hmftools-gripss

  To create a new environment, run::

      mamba create --name myenvname hmftools-gripss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-gripss:<tag>

   (see `hmftools-gripss/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-gripss| image:: https://img.shields.io/conda/dn/bioconda/hmftools-gripss.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-gripss
   :alt:   (downloads)
.. |docker_hmftools-gripss| image:: https://quay.io/repository/biocontainers/hmftools-gripss/status
   :target: https://quay.io/repository/biocontainers/hmftools-gripss
.. _`hmftools-gripss/tags`: https://quay.io/repository/biocontainers/hmftools-gripss?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-gripss";
        var versions = ["2.4","2.3.5","2.3.2","2.2","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-gripss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-gripss/README.html