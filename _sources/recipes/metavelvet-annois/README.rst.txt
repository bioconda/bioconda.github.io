:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-annois'
.. highlight: bash

metavelvet-annois
=================

.. conda:recipe:: metavelvet-annois
   :replaces_section_title:
   :noindex:

   Metavelvet AnnoIS \- an extra package for metavelvet for versions \< 1.2.01

   :homepage: http://metavelvet.dna.bio.keio.ac.jp
   :license: GNU General Public License
   :recipe: /`metavelvet-annois <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois/meta.yaml>`_

   


.. conda:package:: metavelvet-annois

   |downloads_metavelvet-annois| |docker_metavelvet-annois|

   :versions:
      
      

      ``0.2.01-6``,  ``0.2.01-5``,  ``0.2.01-4``,  ``0.2.01-3``,  ``0.2.01-2``,  ``0.2.01-1``,  ``0.2.01-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-module-build: 

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

    pixi global install metavelvet-annois

to add into an existing workspace instead, run::

    pixi add metavelvet-annois

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metavelvet-annois

Alternatively, to install into a new environment, run::

    conda create -n envname metavelvet-annois

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metavelvet-annois:<tag>

(see `metavelvet-annois/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metavelvet-annois| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-annois.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-annois
   :alt:   (downloads)
.. |docker_metavelvet-annois| image:: https://quay.io/repository/biocontainers/metavelvet-annois/status
   :target: https://quay.io/repository/biocontainers/metavelvet-annois
.. _`metavelvet-annois/tags`: https://quay.io/repository/biocontainers/metavelvet-annois?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-annois";
        var versions = ["0.2.01","0.2.01","0.2.01","0.2.01","0.2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-annois/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-annois/README.html