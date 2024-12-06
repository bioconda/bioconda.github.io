:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thapbi-pict'
.. highlight: bash

thapbi-pict
===========

.. conda:recipe:: thapbi-pict
   :replaces_section_title:
   :noindex:

   THAPBI Phytophthora ITS1 Classifier Tool \(PICT\).

   :homepage: https://github.com/peterjc/thapbi-pict
   :documentation: https://thapbi-pict.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`thapbi-pict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict/meta.yaml>`_

   THAPBI Phytophthora ITS1 Classifier Tool \(PICT\) an ITS1\-based
   diagnostic\/profiling tool from the UK BBSRC funded Tree Health
   and Plant Biosecurity Initiative \(THAPBI\) Phyto\-Threats project\,
   focused on identifying Phytophthora species present in Illumina
   sequenced environmental samples.



.. conda:package:: thapbi-pict

   |downloads_thapbi-pict| |docker_thapbi-pict|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.19-0</code>,  <code>1.0.18-0</code>,  <code>1.0.17-0</code>,  <code>1.0.16-0</code>,  <code>1.0.15-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.6-0``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.6-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.11-0``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.19-0``,  ``0.4.18-0``,  ``0.4.17-0``,  ``0.4.15-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.4-0``,  ``0.3.1-0``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.12-0``,  ``0.1.10-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: ``>=2.1.14``
   :depends biopython: ``>=1.84``
   :depends blast: 
   :depends cutadapt: ``>=4.9``
   :depends flash: ``>=1.2.11``
   :depends graphviz: 
   :depends matplotlib-base: ``>=3.9.2``
   :depends networkx: ``>=3.4.2``
   :depends pydot: ``>=3.0.1``
   :depends python: ``>=3.10``
   :depends rapidfuzz: ``>=3.10.1``
   :depends sqlalchemy: ``>=2.0.36``
   :depends vsearch: 
   :depends xlsxwriter: ``>=3.2``
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

      mamba install thapbi-pict

   and update with::

      mamba update thapbi-pict

  To create a new environment, run::

      mamba create --name myenvname thapbi-pict

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/thapbi-pict:<tag>

   (see `thapbi-pict/tags`_ for valid values for ``<tag>``)


.. |downloads_thapbi-pict| image:: https://img.shields.io/conda/dn/bioconda/thapbi-pict.svg?style=flat
   :target: https://anaconda.org/bioconda/thapbi-pict
   :alt:   (downloads)
.. |docker_thapbi-pict| image:: https://quay.io/repository/biocontainers/thapbi-pict/status
   :target: https://quay.io/repository/biocontainers/thapbi-pict
.. _`thapbi-pict/tags`: https://quay.io/repository/biocontainers/thapbi-pict?tab=tags


.. raw:: html

    <script>
        var package = "thapbi-pict";
        var versions = ["1.0.19","1.0.18","1.0.17","1.0.16","1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thapbi-pict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thapbi-pict/README.html