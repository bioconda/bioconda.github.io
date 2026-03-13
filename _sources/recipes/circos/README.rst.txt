:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos'
.. highlight: bash

circos
======

.. conda:recipe:: circos
   :replaces_section_title:
   :noindex:

   Circos is a software package for visualizing data and information. It visualizes data in a circular layout

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos/meta.yaml>`_
   :links: biotools: :biotools:`circos`, usegalaxy-eu: :usegalaxy-eu:`circos`, doi: :doi:`10.1101/gr.092759.109`

   


.. conda:package:: circos

   |downloads_circos| |docker_circos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.69.9-0</code>,  <code>0.69.8-1</code>,  <code>0.69.8-0</code>,  <code>0.69.6-5</code>,  <code>0.69.6-4</code>,  <code>0.69.6-2</code>,  <code>0.69.6-1</code>,  <code>0.69.6-0</code>,  <code>0.69.5-0</code>,  </span></summary>
      

      ``0.69.9-0``,  ``0.69.8-1``,  ``0.69.8-0``,  ``0.69.6-5``,  ``0.69.6-4``,  ``0.69.6-2``,  ``0.69.6-1``,  ``0.69.6-0``,  ``0.69.5-0``,  ``0.69.4-0``,  ``0.69.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: 
   :depends on perl-clone: 
   :depends on perl-config-general: 
   :depends on perl-digest-perl-md5: 
   :depends on perl-font-ttf: 
   :depends on perl-gd: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-bezier: 
   :depends on perl-math-round: 
   :depends on perl-math-vecstat: 
   :depends on perl-params-validate: 
   :depends on perl-readonly: 
   :depends on perl-regexp-common: 
   :depends on perl-set-intspan: 
   :depends on perl-statistics-basic: 
   :depends on perl-svg: 
   :depends on perl-text-format: 
   :depends on perl-time-hires: 

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

    pixi global install circos

to add into an existing workspace instead, run::

    pixi add circos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circos

Alternatively, to install into a new environment, run::

    conda create -n envname circos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circos:<tag>

(see `circos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circos| image:: https://img.shields.io/conda/dn/bioconda/circos.svg?style=flat
   :target: https://anaconda.org/bioconda/circos
   :alt:   (downloads)
.. |docker_circos| image:: https://quay.io/repository/biocontainers/circos/status
   :target: https://quay.io/repository/biocontainers/circos
.. _`circos/tags`: https://quay.io/repository/biocontainers/circos?tab=tags


.. raw:: html

    <script>
        var package = "circos";
        var versions = ["0.69.9","0.69.8","0.69.8","0.69.6","0.69.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos/README.html