:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirdeep2'
.. highlight: bash

mirdeep2
========

.. conda:recipe:: mirdeep2
   :replaces_section_title:
   :noindex:

   A completely overhauled tool which discovers microRNA genes by analyzing sequenced RNAs

   :homepage: https://www.mdc-berlin.de/8551903/en/research/research_teams/systems_biology_of_gene_regulatory_elements/projects/miRDeep
   :license: academic
   :recipe: /`mirdeep2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirdeep2/meta.yaml>`_

   


.. conda:package:: mirdeep2

   |downloads_mirdeep2| |docker_mirdeep2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1.3-2</code>,  <code>2.0.1.3-1</code>,  <code>2.0.1.3-0</code>,  <code>2.0.1.2-0</code>,  <code>2.0.0.8-5</code>,  <code>2.0.0.8-4</code>,  <code>2.0.0.8-3</code>,  <code>2.0.0.8-2</code>,  <code>2.0.0.8-1</code>,  </span></summary>
      

      ``2.0.1.3-2``,  ``2.0.1.3-1``,  ``2.0.1.3-0``,  ``2.0.1.2-0``,  ``2.0.0.8-5``,  ``2.0.0.8-4``,  ``2.0.0.8-3``,  ``2.0.0.8-2``,  ``2.0.0.8-1``,  ``2.0.0.8-0``,  ``2.0.0.7-8``,  ``2.0.0.7-7``,  ``2.0.0.7-6``,  ``2.0.0.7-5``,  ``2.0.0.7-4``,  ``2.0.0.7-3``,  ``2.0.0.7-2``,  ``2.0.0.7-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie: 
   :depends on perl: 
   :depends on perl-compress-raw-zlib: 
   :depends on perl-font-ttf: 
   :depends on perl-libwww-perl: 
   :depends on perl-pdf-api2: 
   :depends on randfold: 
   :depends on viennarna: 

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

    pixi global install mirdeep2

to add into an existing workspace instead, run::

    pixi add mirdeep2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirdeep2

Alternatively, to install into a new environment, run::

    conda create -n envname mirdeep2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirdeep2:<tag>

(see `mirdeep2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirdeep2| image:: https://img.shields.io/conda/dn/bioconda/mirdeep2.svg?style=flat
   :target: https://anaconda.org/bioconda/mirdeep2
   :alt:   (downloads)
.. |docker_mirdeep2| image:: https://quay.io/repository/biocontainers/mirdeep2/status
   :target: https://quay.io/repository/biocontainers/mirdeep2
.. _`mirdeep2/tags`: https://quay.io/repository/biocontainers/mirdeep2?tab=tags


.. raw:: html

    <script>
        var package = "mirdeep2";
        var versions = ["2.0.1.3","2.0.1.3","2.0.1.3","2.0.1.2","2.0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirdeep2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirdeep2/README.html