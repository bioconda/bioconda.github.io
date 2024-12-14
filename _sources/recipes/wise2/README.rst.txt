:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wise2'
.. highlight: bash

wise2
=====

.. conda:recipe:: wise2
   :replaces_section_title:
   :noindex:

   The Wise2.4 package is the \"revival\" release of Wise2

   :homepage: https://www.ebi.ac.uk/~birney/wise2/
   :license: Public Domain
   :recipe: /`wise2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wise2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wise2/meta.yaml>`_

   


.. conda:package:: wise2

   |downloads_wise2| |docker_wise2|

   :versions:
      
      

      ``2.4.1-6``,  ``2.4.1-5``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``

      

   
   :depends glib: 
   :depends libgcc: ``>=13``
   :depends libglib: ``>=2.82.2,<3.0a0``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install wise2

   and update with::

      mamba update wise2

  To create a new environment, run::

      mamba create --name myenvname wise2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wise2:<tag>

   (see `wise2/tags`_ for valid values for ``<tag>``)


.. |downloads_wise2| image:: https://img.shields.io/conda/dn/bioconda/wise2.svg?style=flat
   :target: https://anaconda.org/bioconda/wise2
   :alt:   (downloads)
.. |docker_wise2| image:: https://quay.io/repository/biocontainers/wise2/status
   :target: https://quay.io/repository/biocontainers/wise2
.. _`wise2/tags`: https://quay.io/repository/biocontainers/wise2?tab=tags


.. raw:: html

    <script>
        var package = "wise2";
        var versions = ["2.4.1","2.4.1","2.4.1","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wise2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wise2/README.html