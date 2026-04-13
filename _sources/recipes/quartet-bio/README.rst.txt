:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quartet-bio'
.. highlight: bash

quartet-bio
===========

.. conda:recipe:: quartet-bio
   :replaces_section_title:
   :noindex:

   A telomere\-to\-telomere toolkit for gap\-free genome assembly and centromeric repeat identification.

   :homepage: https://github.com/aaranyue/quarTeT
   :documentation: https://github.com/aaranyue/quarTeT/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`quartet-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quartet-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quartet-bio/meta.yaml>`_
   :links: doi: :doi:`10.1093/hr/uhad127`, biotools: :biotools:`quartet`

   


.. conda:package:: quartet-bio

   |downloads_quartet-bio| |docker_quartet-bio|

   :versions:
      
      

      ``1.2.5-0``

      

   
   :depends on blast: 
   :depends on cd-hit: 
   :depends on gnuplot: 
   :depends on hifiasm: 
   :depends on minimap2: 
   :depends on mummer4: 
   :depends on python: ``>=3.7``
   :depends on r-ggplot2: 
   :depends on r-rideogram: 
   :depends on tidk: 
   :depends on trf: 
   :depends on unimap: 

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

    pixi global install quartet-bio

to add into an existing workspace instead, run::

    pixi add quartet-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quartet-bio

Alternatively, to install into a new environment, run::

    conda create -n envname quartet-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quartet-bio:<tag>

(see `quartet-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quartet-bio| image:: https://img.shields.io/conda/dn/bioconda/quartet-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/quartet-bio
   :alt:   (downloads)
.. |docker_quartet-bio| image:: https://quay.io/repository/biocontainers/quartet-bio/status
   :target: https://quay.io/repository/biocontainers/quartet-bio
.. _`quartet-bio/tags`: https://quay.io/repository/biocontainers/quartet-bio?tab=tags


.. raw:: html

    <script>
        var package = "quartet-bio";
        var versions = ["1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quartet-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quartet-bio/README.html