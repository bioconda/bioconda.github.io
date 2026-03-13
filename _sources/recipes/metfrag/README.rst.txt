:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metfrag'
.. highlight: bash

metfrag
=======

.. conda:recipe:: metfrag
   :replaces_section_title:
   :noindex:

   MetFrag is a freely available software for the annotation of high precision tandem mass spectra of metabolites which is a first and critical step for the identification of a molecular structure. Candidate molecules of different databases are fragmented in silico and matched against mass to charge values. A score calculated using the fragment peak matches gives hints to the quality of the candidate spectrum assignment.

   :homepage: http://c-ruttkies.github.io/MetFrag/
   :license: GNU Lesser General Public License version 2.1 or later.
   :recipe: /`metfrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metfrag/meta.yaml>`_

   


.. conda:package:: metfrag

   |downloads_metfrag| |docker_metfrag|

   :versions:
      
      

      ``2.4.5-5``,  ``2.4.5-4``,  ``2.4.5-3``,  ``2.4.5-1``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.1-1``,  ``2.3.1-0``

      

   
   :depends on openjdk: ``>=7``
   :depends on parallel: 
   :depends on unzip: 
   :depends on zip: 

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

    pixi global install metfrag

to add into an existing workspace instead, run::

    pixi add metfrag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metfrag

Alternatively, to install into a new environment, run::

    conda create -n envname metfrag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metfrag:<tag>

(see `metfrag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metfrag| image:: https://img.shields.io/conda/dn/bioconda/metfrag.svg?style=flat
   :target: https://anaconda.org/bioconda/metfrag
   :alt:   (downloads)
.. |docker_metfrag| image:: https://quay.io/repository/biocontainers/metfrag/status
   :target: https://quay.io/repository/biocontainers/metfrag
.. _`metfrag/tags`: https://quay.io/repository/biocontainers/metfrag?tab=tags


.. raw:: html

    <script>
        var package = "metfrag";
        var versions = ["2.4.5","2.4.5","2.4.5","2.4.5","2.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metfrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metfrag/README.html