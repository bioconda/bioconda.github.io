:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpsift'
.. highlight: bash

snpsift
=======

.. conda:recipe:: snpsift
   :replaces_section_title:
   :noindex:

   Toolbox that allows you to filter and manipulate annotated files

   :homepage: http://snpeff.sourceforge.net/SnpSift.html
   :license: LGPLv3
   :recipe: /`snpsift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsift/meta.yaml>`_
   :links: biotools: :biotools:`SnpSift`, doi: :doi:`10.3389/fgene.2012.00035`

   


.. conda:package:: snpsift

   |downloads_snpsift| |docker_snpsift|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.4.0a-0</code>,  <code>5.3.0a-0</code>,  <code>5.2-0</code>,  <code>5.1-0</code>,  <code>5.1d-0</code>,  <code>4.3.1t-3</code>,  <code>4.3.1t-2</code>,  <code>4.3.1t-1</code>,  <code>4.3.1t-0</code>,  </span></summary>
      

      ``5.4.0a-0``,  ``5.3.0a-0``,  ``5.2-0``,  ``5.1-0``,  ``5.1d-0``,  ``4.3.1t-3``,  ``4.3.1t-2``,  ``4.3.1t-1``,  ``4.3.1t-0``,  ``4.3.1r-0``,  ``4.3.1p-0``,  ``4.3.1o-0``,  ``4.3.1m-0``,  ``4.3-2``,  ``4.3-1``,  ``4.2-5``,  ``4.2-4``,  ``4.2-3``,  ``4.2-2``,  ``4.2-1``,  ``4.1l-4``,  ``4.1l-3``,  ``4.1l-1``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=21``
   :depends perl: 
   :depends python: 
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

      mamba install snpsift

   and update with::

      mamba update snpsift

  To create a new environment, run::

      mamba create --name myenvname snpsift

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snpsift:<tag>

   (see `snpsift/tags`_ for valid values for ``<tag>``)


.. |downloads_snpsift| image:: https://img.shields.io/conda/dn/bioconda/snpsift.svg?style=flat
   :target: https://anaconda.org/bioconda/snpsift
   :alt:   (downloads)
.. |docker_snpsift| image:: https://quay.io/repository/biocontainers/snpsift/status
   :target: https://quay.io/repository/biocontainers/snpsift
.. _`snpsift/tags`: https://quay.io/repository/biocontainers/snpsift?tab=tags


.. raw:: html

    <script>
        var package = "snpsift";
        var versions = ["5.4.0a","5.3.0a","5.2","5.1","5.1d"];
    </script>





Notes
-----
The tool is available as command \`SnpSift\`. Note that the package version is slightly different from upstream\, this is to make sure conda will order the package versions correctly.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsift/README.html