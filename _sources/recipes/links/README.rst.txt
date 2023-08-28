:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'links'
.. highlight: bash

links
=====

.. conda:recipe:: links
   :replaces_section_title:
   :noindex:

   Long Interval Nucleotide K\-mer Scaffolder

   :homepage: https://github.com/bcgsc/LINKS
   :license: GPLv3
   :recipe: /`links <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links/meta.yaml>`_

   


.. conda:package:: links

   |downloads_links| |docker_links|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.8.7-3</code>,  <code>1.8.7-2</code>,  <code>1.8.7-1</code>,  </span></summary>
      

      ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.7-3``,  ``1.8.7-2``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.4-0``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends perl: 
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

      mamba install links

   and update with::

      mamba update links

  To create a new environment, run::

      mamba create --name myenvname links

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/links:<tag>

   (see `links/tags`_ for valid values for ``<tag>``)


.. |downloads_links| image:: https://img.shields.io/conda/dn/bioconda/links.svg?style=flat
   :target: https://anaconda.org/bioconda/links
   :alt:   (downloads)
.. |docker_links| image:: https://quay.io/repository/biocontainers/links/status
   :target: https://quay.io/repository/biocontainers/links
.. _`links/tags`: https://quay.io/repository/biocontainers/links?tab=tags


.. raw:: html

    <script>
        var package = "links";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/links/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/links/README.html