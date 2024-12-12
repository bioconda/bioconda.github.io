:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tantan'
.. highlight: bash

tantan
======

.. conda:recipe:: tantan
   :replaces_section_title:
   :noindex:

   tantan masks simple regions \(low complexity \& short\-period tandem repeats\) in biological sequences.

   :homepage: https://gitlab.com/mcfrith/tantan
   :documentation: https://gitlab.com/mcfrith/tantan/-/blob/main/README.rst
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkq1212`

   


.. conda:package:: tantan

   |downloads_tantan| |docker_tantan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>51-1</code>,  <code>51-0</code>,  <code>50-0</code>,  <code>49-0</code>,  <code>40-2</code>,  <code>40-1</code>,  <code>40-0</code>,  <code>39-0</code>,  <code>34-0</code>,  </span></summary>
      

      ``51-1``,  ``51-0``,  ``50-0``,  ``49-0``,  ``40-2``,  ``40-1``,  ``40-0``,  ``39-0``,  ``34-0``,  ``32-0``,  ``31-0``,  ``26-2``,  ``26-1``,  ``26-0``,  ``13-2``,  ``13-1``,  ``13-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install tantan

   and update with::

      mamba update tantan

  To create a new environment, run::

      mamba create --name myenvname tantan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tantan:<tag>

   (see `tantan/tags`_ for valid values for ``<tag>``)


.. |downloads_tantan| image:: https://img.shields.io/conda/dn/bioconda/tantan.svg?style=flat
   :target: https://anaconda.org/bioconda/tantan
   :alt:   (downloads)
.. |docker_tantan| image:: https://quay.io/repository/biocontainers/tantan/status
   :target: https://quay.io/repository/biocontainers/tantan
.. _`tantan/tags`: https://quay.io/repository/biocontainers/tantan?tab=tags


.. raw:: html

    <script>
        var package = "tantan";
        var versions = ["51","51","50","49","40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tantan/README.html