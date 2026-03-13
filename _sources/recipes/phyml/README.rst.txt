:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyml'
.. highlight: bash

phyml
=====

.. conda:recipe:: phyml
   :replaces_section_title:
   :noindex:

   Phylogenetic estimation using \(Maximum\) Likelihood

   :homepage: http://www.atgc-montpellier.fr/phyml/
   :documentation: https://github.com/stephaneguindon/phyml/blob/master/doc/phyml-manual.pdf
   
   :developer docs: https://github.com/stephaneguindon/phyml/
   :license: GPL / GPL-3.0-only
   :recipe: /`phyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyml/meta.yaml>`_
   :links: biotools: :biotools:`phyml`, doi: :doi:`10.1093/sysbio/syq010`

   PhyML is a software that estimates maximum likelihood phylogenies from
   alignments of nucleotide or amino acid sequences. The main strength of
   PhyML lies in the large number of substitution models coupled to various
   options to search the space of phylogenetic tree topologies\, going from
   very fast and efficient methods to slower but generally more accurate
   approaches. PhyML was designed to process moderate to large data sets. In
   theory\, alignments with up to 4\,000 sequences 2\,000\,000 character\-long
   can be processed. PhyML can process data sets made of multiple genes and
   fit sophisticated substitution models with heterogeneous components
   across partition elements.



.. conda:package:: phyml

   |downloads_phyml| |docker_phyml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.20220408-3</code>,  <code>3.3.20220408-2</code>,  <code>3.3.20220408-1</code>,  <code>3.3.20220408-0</code>,  <code>3.3.20211231-2</code>,  <code>3.3.20211231-1</code>,  <code>3.3.20211231-0</code>,  <code>3.3.20200621-2</code>,  <code>3.3.20200621-1</code>,  </span></summary>
      

      ``3.3.20220408-3``,  ``3.3.20220408-2``,  ``3.3.20220408-1``,  ``3.3.20220408-0``,  ``3.3.20211231-2``,  ``3.3.20211231-1``,  ``3.3.20211231-0``,  ``3.3.20200621-2``,  ``3.3.20200621-1``,  ``3.3.20200621-0``,  ``3.3.20190909-1``,  ``3.3.20190909-0``,  ``3.3.20190908-0``,  ``3.3.20190321-1``,  ``3.3.20190321-0``,  ``3.3.20180621-0``,  ``3.3.20170530-0``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on openmpi: ``>=4.1.6,<5.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install phyml

to add into an existing workspace instead, run::

    pixi add phyml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyml

Alternatively, to install into a new environment, run::

    conda create -n envname phyml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyml:<tag>

(see `phyml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyml| image:: https://img.shields.io/conda/dn/bioconda/phyml.svg?style=flat
   :target: https://anaconda.org/bioconda/phyml
   :alt:   (downloads)
.. |docker_phyml| image:: https://quay.io/repository/biocontainers/phyml/status
   :target: https://quay.io/repository/biocontainers/phyml
.. _`phyml/tags`: https://quay.io/repository/biocontainers/phyml?tab=tags


.. raw:: html

    <script>
        var package = "phyml";
        var versions = ["3.3.20220408","3.3.20220408","3.3.20220408","3.3.20220408","3.3.20211231"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyml/README.html