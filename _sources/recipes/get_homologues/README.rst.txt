:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_homologues'
.. highlight: bash

get_homologues
==============

.. conda:recipe:: get_homologues
   :replaces_section_title:
   :noindex:

   A versatile software package for pan\-genome analysis\, including GET\_HOMOLOGUES and GET\_HOMOLOGUES\-EST

   :homepage: https://github.com/eead-csic-compbio/get_homologues
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`get_homologues <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_homologues/meta.yaml>`_
   :links: biotools: :biotools:`get_homologues`, doi: :doi:`https://doi.org/10.1128/AEM.02411-13`, doi: :doi:`https://doi.org/10.3389/fpls.2017.00184`, doi: :doi:`https://doi.org/10.1007/978-1-4939-1720-4_14`, doi: :doi:`https://doi.org/10.1007/978-1-0716-2429-6_9`

   


.. conda:package:: get_homologues

   |downloads_get_homologues| |docker_get_homologues|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.4-0</code>,  <code>3.7.3-0</code>,  <code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.6.3-0</code>,  <code>3.6.2-0</code>,  <code>3.6.1-0</code>,  <code>3.5.5-0</code>,  <code>3.5.4-0</code>,  </span></summary>
      

      ``3.7.4-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.6.3-0``,  ``3.6.2-0``,  ``3.6.1-0``,  ``3.5.5-0``,  ``3.5.4-0``,  ``3.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends cogtriangles: 
   :depends diamond: 
   :depends hmmer: 
   :depends mcl: 
   :depends perl: 
   :depends perl-gd: 
   :depends phylip: 
   :depends r-ape: 
   :depends r-base: 
   :depends r-dendextend: 
   :depends r-factoextra: 
   :depends r-gplots: 
   :depends wget: 
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

      mamba install get_homologues

   and update with::

      mamba update get_homologues

  To create a new environment, run::

      mamba create --name myenvname get_homologues

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/get_homologues:<tag>

   (see `get_homologues/tags`_ for valid values for ``<tag>``)


.. |downloads_get_homologues| image:: https://img.shields.io/conda/dn/bioconda/get_homologues.svg?style=flat
   :target: https://anaconda.org/bioconda/get_homologues
   :alt:   (downloads)
.. |docker_get_homologues| image:: https://quay.io/repository/biocontainers/get_homologues/status
   :target: https://quay.io/repository/biocontainers/get_homologues
.. _`get_homologues/tags`: https://quay.io/repository/biocontainers/get_homologues?tab=tags


.. raw:: html

    <script>
        var package = "get_homologues";
        var versions = ["3.7.4","3.7.3","3.7.2","3.7.1","3.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_homologues/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_homologues/README.html