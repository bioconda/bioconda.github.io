:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barrnap'
.. highlight: bash

barrnap
=======

.. conda:recipe:: barrnap
   :replaces_section_title:
   :noindex:

   Barrnap predicts the location of ribosomal RNA genes in genomes. \(bacteria\, archaea\, metazoan mitochondria and eukaryotes.\)

   :homepage: https://github.com/tseemann/barrnap
   :license: GPLv3
   :recipe: /`barrnap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barrnap/meta.yaml>`_
   :links: biotools: :biotools:`barrnap`

   


.. conda:package:: barrnap

   |downloads_barrnap| |docker_barrnap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-4</code>,  <code>0.9-3</code>,  <code>0.9-2</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-4</code>,  <code>0.7-3</code>,  </span></summary>
      

      ``0.9-4``,  ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-4``,  ``0.7-3``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on hmmer: ``>=3.1b``
   :depends on perl: 

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

    pixi global install barrnap

to add into an existing workspace instead, run::

    pixi add barrnap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install barrnap

Alternatively, to install into a new environment, run::

    conda create -n envname barrnap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/barrnap:<tag>

(see `barrnap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_barrnap| image:: https://img.shields.io/conda/dn/bioconda/barrnap.svg?style=flat
   :target: https://anaconda.org/bioconda/barrnap
   :alt:   (downloads)
.. |docker_barrnap| image:: https://quay.io/repository/biocontainers/barrnap/status
   :target: https://quay.io/repository/biocontainers/barrnap
.. _`barrnap/tags`: https://quay.io/repository/biocontainers/barrnap?tab=tags


.. raw:: html

    <script>
        var package = "barrnap";
        var versions = ["0.9","0.9","0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barrnap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barrnap/README.html