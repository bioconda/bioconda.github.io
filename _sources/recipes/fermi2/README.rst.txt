:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermi2'
.. highlight: bash

fermi2
======

.. conda:recipe:: fermi2
   :replaces_section_title:
   :noindex:

   Fermi2 focuses on the exploration of FMD\-index as a graph.

   :homepage: https://github.com/lh3/fermi2
   :license: Unknown
   :recipe: /`fermi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermi2/meta.yaml>`_

   


.. conda:package:: fermi2

   |downloads_fermi2| |docker_fermi2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r193-7</code>,  <code>r193-6</code>,  <code>r193-5</code>,  <code>r193-4</code>,  <code>r193-3</code>,  <code>r193-2</code>,  <code>r193-1</code>,  <code>r193-0</code>,  <code>r188-0</code>,  </span></summary>
      

      ``r193-7``,  ``r193-6``,  ``r193-5``,  ``r193-4``,  ``r193-3``,  ``r193-2``,  ``r193-1``,  ``r193-0``,  ``r188-0``,  ``r170-3``,  ``r170-2``,  ``r170-1``,  ``r170-0``

      
      .. raw:: html

         </details>
      

   
   :depends bfc: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends make: 
   :depends perl: 
   :depends ropebwt2: 
   :depends seqtk: 
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

      mamba install fermi2

   and update with::

      mamba update fermi2

  To create a new environment, run::

      mamba create --name myenvname fermi2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fermi2:<tag>

   (see `fermi2/tags`_ for valid values for ``<tag>``)


.. |downloads_fermi2| image:: https://img.shields.io/conda/dn/bioconda/fermi2.svg?style=flat
   :target: https://anaconda.org/bioconda/fermi2
   :alt:   (downloads)
.. |docker_fermi2| image:: https://quay.io/repository/biocontainers/fermi2/status
   :target: https://quay.io/repository/biocontainers/fermi2
.. _`fermi2/tags`: https://quay.io/repository/biocontainers/fermi2?tab=tags


.. raw:: html

    <script>
        var package = "fermi2";
        var versions = ["r193","r193","r193","r193","r193"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermi2/README.html