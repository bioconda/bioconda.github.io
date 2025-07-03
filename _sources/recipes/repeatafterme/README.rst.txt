:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatafterme'
.. highlight: bash

repeatafterme
=============

.. conda:recipe:: repeatafterme
   :replaces_section_title:
   :noindex:

   A package for the extension of repetitive DNA sequences.

   :homepage: https://github.com/Dfam-consortium/RepeatAfterMe
   :documentation: https://github.com/Dfam-consortium/RepeatAfterMe/blob/RepeatAfterMe_V0.0.7/README.md
   
   :license: CC0
   :recipe: /`repeatafterme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatafterme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatafterme/meta.yaml>`_

   


.. conda:package:: repeatafterme

   |downloads_repeatafterme| |docker_repeatafterme|

   :versions:
      
      

      ``0.0.7-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends perl: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install repeatafterme

   and update with::

      mamba update repeatafterme

  To create a new environment, run::

      mamba create --name myenvname repeatafterme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repeatafterme:<tag>

   (see `repeatafterme/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatafterme| image:: https://img.shields.io/conda/dn/bioconda/repeatafterme.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatafterme
   :alt:   (downloads)
.. |docker_repeatafterme| image:: https://quay.io/repository/biocontainers/repeatafterme/status
   :target: https://quay.io/repository/biocontainers/repeatafterme
.. _`repeatafterme/tags`: https://quay.io/repository/biocontainers/repeatafterme?tab=tags


.. raw:: html

    <script>
        var package = "repeatafterme";
        var versions = ["0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatafterme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatafterme/README.html