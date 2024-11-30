:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motus'
.. highlight: bash

motus
=====

.. conda:recipe:: motus
   :replaces_section_title:
   :noindex:

   Marker gene\-based OTU \(mOTU\) profiling

   :homepage: http://motu-tool.org/
   :developer docs: https://github.com/motu-tool/mOTUs
   :license: GPL / GPL-3.0
   :recipe: /`motus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus/meta.yaml>`_

   


.. conda:package:: motus

   |downloads_motus| |docker_motus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-0</code>,  <code>3.0.3-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.1.1-3</code>,  </span></summary>
      

      ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.1.1-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.17``
   :depends metasnv: ``1.0.3.*``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.9``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install motus

   and update with::

      mamba update motus

  To create a new environment, run::

      mamba create --name myenvname motus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/motus:<tag>

   (see `motus/tags`_ for valid values for ``<tag>``)


.. |downloads_motus| image:: https://img.shields.io/conda/dn/bioconda/motus.svg?style=flat
   :target: https://anaconda.org/bioconda/motus
   :alt:   (downloads)
.. |docker_motus| image:: https://quay.io/repository/biocontainers/motus/status
   :target: https://quay.io/repository/biocontainers/motus
.. _`motus/tags`: https://quay.io/repository/biocontainers/motus?tab=tags


.. raw:: html

    <script>
        var package = "motus";
        var versions = ["3.1.0","3.0.3","3.0.1","3.0.0","2.6.1"];
    </script>





Notes
-----
A tiny wrapper to the command motus was added. See build.sh for


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motus/README.html