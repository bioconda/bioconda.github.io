:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2science'
.. highlight: bash

seq2science
===========

.. conda:recipe:: seq2science
   :replaces_section_title:
   :noindex:

   Automated preprocessing of Next\-Generation\-Sequencing data.

   :homepage: https://vanheeringen-lab.github.io/seq2science
   :developer docs: https://github.com/vanheeringen-lab/seq2science
   :license: MIT / MIT
   :recipe: /`seq2science <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science/meta.yaml>`_

   


.. conda:package:: seq2science

   |downloads_seq2science| |docker_seq2science|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-0</code>,  <code>0.9.7-0</code>,  <code>0.9.6-0</code>,  <code>0.9.5-0</code>,  </span></summary>
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends argcomplete: ``3.0.5.*``
   :depends biopython: ``1.81.*``
   :depends conda: ``23.1.0.*``
   :depends conda-ecosystem-user-package-isolation: ``1.0.*``
   :depends filelock: ``3.10.7.*``
   :depends genomepy: ``0.16.1.*``
   :depends mamba: ``1.2.0.*``
   :depends matplotlib-base: ``3.7.1.*``
   :depends pandas: ``1.5.3.*``
   :depends pandas_schema: ``0.3.5.*``
   :depends pysradb: ``2.0.1.*``
   :depends python: ``3.10.*``
   :depends pyyaml: ``6.0.*``
   :depends snakemake-minimal: ``7.25.0.*``
   :depends tabulate: ``0.9.0.*``
   :depends trackhub: ``0.1.2019.12.24.*``
   :depends xdg: ``6.0.0.*``
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

      mamba install seq2science

   and update with::

      mamba update seq2science

  To create a new environment, run::

      mamba create --name myenvname seq2science

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq2science:<tag>

   (see `seq2science/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2science| image:: https://img.shields.io/conda/dn/bioconda/seq2science.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2science
   :alt:   (downloads)
.. |docker_seq2science| image:: https://quay.io/repository/biocontainers/seq2science/status
   :target: https://quay.io/repository/biocontainers/seq2science
.. _`seq2science/tags`: https://quay.io/repository/biocontainers/seq2science?tab=tags


.. raw:: html

    <script>
        var package = "seq2science";
        var versions = ["1.0.3","1.0.2","1.0.0","1.0.0","0.9.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2science/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2science/README.html