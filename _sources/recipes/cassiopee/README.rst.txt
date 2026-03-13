:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassiopee'
.. highlight: bash

cassiopee
=========

.. conda:recipe:: cassiopee
   :replaces_section_title:
   :noindex:

   scan an input genomic sequence \(dna\/rna\/protein\) and search for a subsequence with exact match or allowing substitutions \(Hamming distance\) and\/or insertion\/deletions

   :homepage: https://github.com/osallou/cassiopee-c
   :license: GPL-3+
   :recipe: /`cassiopee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee/meta.yaml>`_

   


.. conda:package:: cassiopee

   |downloads_cassiopee| |docker_cassiopee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-7</code>,  <code>1.0.9-6</code>,  <code>1.0.9-5</code>,  <code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.5-2</code>,  </span></summary>
      

      ``1.0.9-7``,  ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on glog: ``>=0.6.0,<0.7.0a0``
   :depends on icu: ``>=73.2,<74.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install cassiopee

to add into an existing workspace instead, run::

    pixi add cassiopee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cassiopee

Alternatively, to install into a new environment, run::

    conda create -n envname cassiopee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cassiopee:<tag>

(see `cassiopee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cassiopee| image:: https://img.shields.io/conda/dn/bioconda/cassiopee.svg?style=flat
   :target: https://anaconda.org/bioconda/cassiopee
   :alt:   (downloads)
.. |docker_cassiopee| image:: https://quay.io/repository/biocontainers/cassiopee/status
   :target: https://quay.io/repository/biocontainers/cassiopee
.. _`cassiopee/tags`: https://quay.io/repository/biocontainers/cassiopee?tab=tags


.. raw:: html

    <script>
        var package = "cassiopee";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopee/README.html