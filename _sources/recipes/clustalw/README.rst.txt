:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustalw'
.. highlight: bash

clustalw
========

.. conda:recipe:: clustalw
   :replaces_section_title:
   :noindex:

   ClustalW2 is a general purpose multiple sequence alignment program for DNA or proteins.

   :homepage: http://www.clustal.org/clustal2
   :documentation: http://www.clustal.org/download/clustalw_help.txt
   
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`clustalw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw/meta.yaml>`_
   :links: biotools: :biotools:`clustalw_biolib`, biotools: :biotools:`ClustalW2_Phylogeny_API_EBI`, biotools: :biotools:`clustalw2_phylogeny_ebi`, biotools: :biotools:`clustalw2_ebi`, doi: :doi:`10.1093/bioinformatics/btm404`, doi: :doi:`10.1093/nar/22.22.4673`, usegalaxy-eu: :usegalaxy-eu:`clustalw`

   


.. conda:package:: clustalw

   |downloads_clustalw| |docker_clustalw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-12</code>,  <code>2.1-11</code>,  <code>2.1-10</code>,  <code>2.1-9</code>,  <code>2.1-8</code>,  <code>2.1-7</code>,  <code>2.1-6</code>,  <code>2.1-5</code>,  <code>2.1-4</code>,  </span></summary>
      

      ``2.1-12``,  ``2.1-11``,  ``2.1-10``,  ``2.1-9``,  ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install clustalw

to add into an existing workspace instead, run::

    pixi add clustalw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clustalw

Alternatively, to install into a new environment, run::

    conda create -n envname clustalw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clustalw:<tag>

(see `clustalw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clustalw| image:: https://img.shields.io/conda/dn/bioconda/clustalw.svg?style=flat
   :target: https://anaconda.org/bioconda/clustalw
   :alt:   (downloads)
.. |docker_clustalw| image:: https://quay.io/repository/biocontainers/clustalw/status
   :target: https://quay.io/repository/biocontainers/clustalw
.. _`clustalw/tags`: https://quay.io/repository/biocontainers/clustalw?tab=tags


.. raw:: html

    <script>
        var package = "clustalw";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalw/README.html