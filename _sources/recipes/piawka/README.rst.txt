:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piawka'
.. highlight: bash

piawka
======

.. conda:recipe:: piawka
   :replaces_section_title:
   :noindex:

   The powerful AWK script to calculate population statistics in VCF files with support for varying ploidy and missing data

   :homepage: https://github.com/novikovalab/piawka
   :documentation: https://github.com/novikovalab/piawka/wiki
   
   :license: MIT / MIT
   :recipe: /`piawka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piawka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piawka/meta.yaml>`_

   The powerful awk script to calculate π\, Dxy \(or πxy\, or Nei\'s D\) 
   and some more simple stats \(Fst\, Tajima\'s D\, Ronfort\'s rho\) in VCF files in the command line. 
   Developed to analyze arbitrary\-ploidy groups with substantial amounts of missing data.
   Largely inspired by https\:\/\/github.com\/ksamuk\/pixy



.. conda:package:: piawka

   |downloads_piawka| |docker_piawka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.11-0</code>,  <code>0.8.10-0</code>,  <code>0.8.9-0</code>,  <code>0.8.8-0</code>,  <code>0.8.7-0</code>,  <code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.4-0</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bash: 
   :depends on gawk: ``>=5.0.0``
   :depends on tabix: 

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

    pixi global install piawka

to add into an existing workspace instead, run::

    pixi add piawka

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install piawka

Alternatively, to install into a new environment, run::

    conda create -n envname piawka

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/piawka:<tag>

(see `piawka/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_piawka| image:: https://img.shields.io/conda/dn/bioconda/piawka.svg?style=flat
   :target: https://anaconda.org/bioconda/piawka
   :alt:   (downloads)
.. |docker_piawka| image:: https://quay.io/repository/biocontainers/piawka/status
   :target: https://quay.io/repository/biocontainers/piawka
.. _`piawka/tags`: https://quay.io/repository/biocontainers/piawka?tab=tags


.. raw:: html

    <script>
        var package = "piawka";
        var versions = ["0.8.11","0.8.10","0.8.9","0.8.8","0.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piawka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piawka/README.html