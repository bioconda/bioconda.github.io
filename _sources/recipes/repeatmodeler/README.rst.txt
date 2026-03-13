:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repeatmodeler'
.. highlight: bash

repeatmodeler
=============

.. conda:recipe:: repeatmodeler
   :replaces_section_title:
   :noindex:

   RepeatModeler is a de\-novo repeat family identification and modeling package.

   :homepage: https://www.repeatmasker.org/RepeatModeler
   :developer docs: https://github.com/Dfam-consortium/RepeatModeler
   :license: Open Software License v2.1
   :recipe: /`repeatmodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmodeler/meta.yaml>`_
   :links: biotools: :biotools:`RepeatModeler`, usegalaxy-eu: :usegalaxy-eu:`repeatmodeler`

   


.. conda:package:: repeatmodeler

   |downloads_repeatmodeler| |docker_repeatmodeler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.7-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2a-1</code>,  <code>2.0.2a-0</code>,  <code>2.0.1-0</code>,  <code>1.0.11-3</code>,  </span></summary>
      

      ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2a-1``,  ``2.0.2a-0``,  ``2.0.1-0``,  ``1.0.11-3``,  ``1.0.11-2``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.8-1``,  ``1.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cd-hit: ``>=4.8.1``
   :depends on genometools-genometools: ``>=1.6``
   :depends on ltr_retriever: ``>=2.9``
   :depends on mafft: ``>=7.471``
   :depends on ninja-nj: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-devel-size: 
   :depends on perl-file-which: 
   :depends on perl-libwww-perl: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-uri: 
   :depends on recon: ``>=1.08``
   :depends on repeatafterme: 
   :depends on repeatmasker: ``>=4.1.5``
   :depends on repeatscout: ``>=1.0.6``
   :depends on rmblast: ``>=2.14.1``
   :depends on trf: ``>=4.09``
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-twobitinfo: 
   :depends on ucsc-twobittofa: 

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

    pixi global install repeatmodeler

to add into an existing workspace instead, run::

    pixi add repeatmodeler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install repeatmodeler

Alternatively, to install into a new environment, run::

    conda create -n envname repeatmodeler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/repeatmodeler:<tag>

(see `repeatmodeler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_repeatmodeler| image:: https://img.shields.io/conda/dn/bioconda/repeatmodeler.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatmodeler
   :alt:   (downloads)
.. |docker_repeatmodeler| image:: https://quay.io/repository/biocontainers/repeatmodeler/status
   :target: https://quay.io/repository/biocontainers/repeatmodeler
.. _`repeatmodeler/tags`: https://quay.io/repository/biocontainers/repeatmodeler?tab=tags


.. raw:: html

    <script>
        var package = "repeatmodeler";
        var versions = ["2.0.7","2.0.6","2.0.5","2.0.4","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmodeler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmodeler/README.html