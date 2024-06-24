:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trumicount'
.. highlight: bash

trumicount
==========

.. conda:recipe:: trumicount
   :replaces_section_title:
   :noindex:

   For NGS experiments using unique molecular identifiers \(UMIs\)\, molecules that are lost entirely during sequencing cause under\- estimation of the molecule count\, and amplification artifacts like PCR chimeras cause over\-estimation. TRUmiCount corrects UMI data for both types of errors\, thus improving the accuracy of measured molecule counts considerably.

   :homepage: https://cibiv.github.io/trumicount/
   :developer docs: https://github.com/Cibiv/trumicount
   :license: AGPL / AGPL-3.0
   :recipe: /`trumicount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount/meta.yaml>`_

   


.. conda:package:: trumicount

   |downloads_trumicount| |docker_trumicount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.14-2</code>,  <code>0.9.14-1</code>,  <code>0.9.14-0</code>,  <code>0.9.13-3</code>,  <code>0.9.13-2</code>,  <code>0.9.13-1</code>,  <code>0.9.13-0</code>,  <code>0.9.12-0</code>,  <code>0.9.11.1-0</code>,  </span></summary>
      

      ``0.9.14-2``,  ``0.9.14-1``,  ``0.9.14-0``,  ``0.9.13-3``,  ``0.9.13-2``,  ``0.9.13-1``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11.1-0``,  ``0.9.11-1``,  ``0.9.10-1``,  ``0.9.9.3-1``,  ``0.9.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends gawk: ``>=4.0.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-docopt: 
   :depends r-gwpcr: ``>=0.9.10``
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

      mamba install trumicount

   and update with::

      mamba update trumicount

  To create a new environment, run::

      mamba create --name myenvname trumicount

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trumicount:<tag>

   (see `trumicount/tags`_ for valid values for ``<tag>``)


.. |downloads_trumicount| image:: https://img.shields.io/conda/dn/bioconda/trumicount.svg?style=flat
   :target: https://anaconda.org/bioconda/trumicount
   :alt:   (downloads)
.. |docker_trumicount| image:: https://quay.io/repository/biocontainers/trumicount/status
   :target: https://quay.io/repository/biocontainers/trumicount
.. _`trumicount/tags`: https://quay.io/repository/biocontainers/trumicount?tab=tags


.. raw:: html

    <script>
        var package = "trumicount";
        var versions = ["0.9.14","0.9.14","0.9.14","0.9.13","0.9.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trumicount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trumicount/README.html