:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dr-disco'
.. highlight: bash

dr-disco
========

.. conda:recipe:: dr-disco
   :replaces_section_title:
   :noindex:

   Dr. Disco\: fusion gene and genomic breakpoint detection in random hexamer RNA\-seq data

   :homepage: https://github.com/yhoogstrate/dr-disco
   :license: GPL / GPL-3.0+
   :recipe: /`dr-disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dr-disco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dr-disco/meta.yaml>`_

   


.. conda:package:: dr-disco

   |downloads_dr-disco| |docker_dr-disco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.3-0</code>,  <code>0.18.0-0</code>,  <code>0.16.3-0</code>,  <code>0.14.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.2-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.18.3-0``,  ``0.18.0-0``,  ``0.16.3-0``,  ``0.14.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.6.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends htseq: 
   :depends numpy: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install dr-disco

   and update with::

      mamba update dr-disco

  To create a new environment, run::

      mamba create --name myenvname dr-disco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dr-disco:<tag>

   (see `dr-disco/tags`_ for valid values for ``<tag>``)


.. |downloads_dr-disco| image:: https://img.shields.io/conda/dn/bioconda/dr-disco.svg?style=flat
   :target: https://anaconda.org/bioconda/dr-disco
   :alt:   (downloads)
.. |docker_dr-disco| image:: https://quay.io/repository/biocontainers/dr-disco/status
   :target: https://quay.io/repository/biocontainers/dr-disco
.. _`dr-disco/tags`: https://quay.io/repository/biocontainers/dr-disco?tab=tags


.. raw:: html

    <script>
        var package = "dr-disco";
        var versions = ["0.18.3","0.18.0","0.16.3","0.14.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dr-disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dr-disco/README.html