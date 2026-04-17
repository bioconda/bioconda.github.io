:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chorus2'
.. highlight: bash

chorus2
=======

.. conda:recipe:: chorus2
   :replaces_section_title:
   :noindex:

   A pipeline to select oligonucleotides for fluorescence in situ hbridization \(Oligo\-FISH\).

   :homepage: https://github.com/zhangtaolab/Chorus2
   :documentation: https://chorus2.readthedocs.io/en/dev/
   
   :license: MIT
   :recipe: /`chorus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2/meta.yaml>`_
   :links: biotools: :biotools:`chorus2`

   


.. conda:package:: chorus2

   |downloads_chorus2| |docker_chorus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.01-2</code>,  <code>2.1-1</code>,  <code>2.01-1</code>,  <code>2.1-0</code>,  <code>2.01-0</code>,  <code>2.0.1-0</code>,  <code>2.0-5</code>,  </span></summary>
      

      ``2.1-3``,  ``2.1-2``,  ``2.01-2``,  ``2.1-1``,  ``2.01-1``,  ``2.1-0``,  ``2.01-0``,  ``2.0.1-0``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on bwa: 
   :depends on kmer-jellyfish: ``>1``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: 
   :depends on pandas: ``<2``
   :depends on primer3-py: ``>=1.0.0``
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pyfasta: 
   :depends on pyqt: ``<6``
   :depends on python: ``>=3,<3.10``
   :depends on samtools: 
   :depends on sip: ``>=4``

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

    pixi global install chorus2

to add into an existing workspace instead, run::

    pixi add chorus2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chorus2

Alternatively, to install into a new environment, run::

    conda create -n envname chorus2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chorus2:<tag>

(see `chorus2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chorus2| image:: https://img.shields.io/conda/dn/bioconda/chorus2.svg?style=flat
   :target: https://anaconda.org/bioconda/chorus2
   :alt:   (downloads)
.. |docker_chorus2| image:: https://quay.io/repository/biocontainers/chorus2/status
   :target: https://quay.io/repository/biocontainers/chorus2
.. _`chorus2/tags`: https://quay.io/repository/biocontainers/chorus2?tab=tags


.. raw:: html

    <script>
        var package = "chorus2";
        var versions = ["2.1","2.1","2.01","2.1","2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chorus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chorus2/README.html