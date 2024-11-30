:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recognizer'
.. highlight: bash

recognizer
==========

.. conda:recipe:: recognizer
   :replaces_section_title:
   :noindex:

   A tool for domain based annotation with the COG database

   :homepage: https://github.com/iquasere/reCOGnizer
   :documentation: https://github.com/iquasere/reCOGnizer/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`recognizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recognizer/meta.yaml>`_

   reCOGnizer performs domain based annotation with RPS\-BLAST\, using
   Hidden Markov Models \(HMM\) from COG database. It rebuilds COG database
   for multithreaded annotation\, organizes information regarding COG IDs
   and respective categories\, obtains EC numbers using resources from the
   eggNOG database and organizes all this information into TSV and EXCEL
   files for easy handling by users or pipelines. It also produces a Krona
   plot representing the quantification of COG functions identified.



.. conda:package:: recognizer

   |downloads_recognizer| |docker_recognizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.4-0</code>,  <code>1.9.3-0</code>,  <code>1.9.2-0</code>,  <code>1.9.1-0</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.12``
   :depends krona: 
   :depends lxml: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends tqdm: 
   :depends wget: 
   :depends xlsxwriter: 
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

      mamba install recognizer

   and update with::

      mamba update recognizer

  To create a new environment, run::

      mamba create --name myenvname recognizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recognizer:<tag>

   (see `recognizer/tags`_ for valid values for ``<tag>``)


.. |downloads_recognizer| image:: https://img.shields.io/conda/dn/bioconda/recognizer.svg?style=flat
   :target: https://anaconda.org/bioconda/recognizer
   :alt:   (downloads)
.. |docker_recognizer| image:: https://quay.io/repository/biocontainers/recognizer/status
   :target: https://quay.io/repository/biocontainers/recognizer
.. _`recognizer/tags`: https://quay.io/repository/biocontainers/recognizer?tab=tags


.. raw:: html

    <script>
        var package = "recognizer";
        var versions = ["1.11.1","1.11.0","1.10.1","1.10.0","1.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recognizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recognizer/README.html